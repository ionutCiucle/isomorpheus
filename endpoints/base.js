import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import AppContainer from '../client/app-container.js';

export default function(req, res) {
  fs.readFile('./index.html', 'utf8', function(err, data) {
    if (err) {
      throw err;
    }

    res.send(_getInjectedHTML(data));
  });
}

function _getInjectedHTML(sourceHTML) {
  const rawReactComponent = ReactDOMServer.renderToString(<AppContainer/>);

  return sourceHTML.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${rawReactComponent}</div>`
  );
}
