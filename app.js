var express = require('express');
var cheerio = require('cheerio');
var request = require('request');
var app = express();
app.set('view engine', 'ejs');
app.set('views','./views/');

app.get('/', function(req,res){
  res.render('index');
})
request('https://www.naver.com/', function (err, response, html) {
  if(err) {
    res.status(500).send('Internal Server Error');
    console.log(err);
  } else {
      var $ = cheerio.load(html);
      var hot_chart = $('.ah_roll_area');

      // console.log(footer_info.text());
      console.log(hot_chart.text());
  }
});
app.listen(3000);
console.log('3000 is the magic port');
