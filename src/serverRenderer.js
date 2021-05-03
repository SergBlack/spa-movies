/* eslint-disable max-len */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';

import App from './App';

function renderHTML(html, style) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset=utf-8>
        <title>React Server Side Rendering</title>
        ${process.env.NODE_ENV === 'development' ? style : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
      </head>
      <body>
        <div id="root">${html}</div>
        <div id="modal-root"></div>
        <script src="/js/main.js"></script>
      </body>
    </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const context = {};

    const root = (
      <App
        context={context}
        location={req.url}
        Router={StaticRouter}
      />
    );

    let htmlString = '';
    let styleTags = '';

    const sheet = new ServerStyleSheet();
    try {
      htmlString = renderToString(sheet.collectStyles(root));
      styleTags = sheet.getStyleTags();
    } catch (error) {
      console.error(error);
    } finally {
      sheet.seal();
    }

    res.send(renderHTML(htmlString, styleTags));
  };
}
