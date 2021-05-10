/* eslint-disable max-len */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import configureStore from '@redux/configureStore';
import { ChunkExtractor } from '@loadable/server';
import path from 'path';

import App from './App';
import routes from './routes';

function renderHTML(html, style, preloadedState, extractor) {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Movies app</title>
        ${process.env.NODE_ENV === 'development' ? style : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
        ${extractor.getLinkTags()}
      </head>
      <body>
        <div id="root">${html}</div>
        <div id="modal-root"></div>
        <script>
          window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        ${extractor.getScriptTags()}
      </body>
    </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const store = configureStore();
    const promises = routes.reduce((acc, route) => {
      const match = matchPath(req.url, route);
      if (match && route.component && route.fetchMethod) {
        acc.push(Promise.resolve(store.dispatch(route.fetchMethod(match.params))));
      }
      return acc;
    }, []);

    Promise.all(promises).then(() => {
      const context = {};
      const statsFile = path.resolve('./public/loadable-stats.json');
      const extractor = new ChunkExtractor({ statsFile });

      const jsx = extractor.collectChunks(
        <App
          context={context}
          location={req.url}
          Router={StaticRouter}
          store={store}
        />,
      );

      renderToString(jsx);
      let styleTags = '';
      let htmlString = '';

      const sheet = new ServerStyleSheet();
      try {
        htmlString = renderToString(sheet.collectStyles(jsx));
        styleTags = sheet.getStyleTags();
      } catch (error) {
        console.error(error);
      } finally {
        sheet.seal();
      }

      if (context.url) {
        res.writeHead(302, {
          Location: context.url,
        });
        res.end();
        return;
      }

      const preloadedState = store.getState();

      res.send(renderHTML(htmlString, styleTags, preloadedState, extractor));
    }).catch((e) => console.error(e));
  };
}
