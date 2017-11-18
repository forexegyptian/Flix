const React = require('react');

import App from '../client/components/App';

const ReactDOMServer = require('react-dom/server');

const html = ReactDOMServer.renderToString(<App />);

console.log(html);