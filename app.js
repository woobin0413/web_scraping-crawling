var express = require('express');
var cheerio = require('cheerio');
var request = require('request');
var app = express();

request('https://datalab.naver.com', function (err, response, html) {
  if(err) {
    res.status(500).send('Internal Server Error');
    console.log(err);
  } else {
      var $ = cheerio.load(html);
      var footer_info = $('.footer_info');

      console.log(footer_info.text());
  }
});
