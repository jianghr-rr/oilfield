const express = require('express');
const path = require('path');
// const proxyMiddleWare = require('http-proxy-middleware');
// const config = require('./config.js');
const utils = require('./utils');
// const contentRouter = require('./content');

let staticDir = path.resolve(__dirname, '../_site/');
let templateRootDir = path.resolve(__dirname, '../_site/');

function init() {
  const app = express();

  app.use(express.static(staticDir, {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: (res) => {
      res.set('x-timestamp', Date.now());
    },
  }));

//   app.use('/api', proxyMiddleWare(proxyOption));

  app.all('*', (req, res) => {
    utils.readContent(templateRootDir, '/index.html')
      .then((content) => {
        res.send(content);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.listen(80);
}

module.exports.init = init;
