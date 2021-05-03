/* eslint-disable max-len */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import configureStore from '@redux/configureStore';

import App from './App';

function renderHTML(html, style, preloadedState) {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Movies app</title>
        ${process.env.NODE_ENV === 'development' ? style : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
      </head>
      <body>
        <div id="root">${html}</div>
        <div id="modal-root"></div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/js/main.js"></script>
      </body>
    </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const context = {};
    const store = configureStore();

    const renderRoot = () => (
      <App
        context={context}
        location={req.url}
        Router={StaticRouter}
        store={store}
      />
    );

    renderToString(renderRoot());

    let htmlString = '';
    let styleTags = '';

    const sheet = new ServerStyleSheet();
    try {
      htmlString = renderToString(sheet.collectStyles(renderRoot()));
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

    res.send(renderHTML(htmlString, styleTags, preloadedState));
  };
}
