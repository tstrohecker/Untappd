var express = require('express');
var app = express();
var request = require('request');
var path = require('path');
var qs = require('querystring');
var lessMiddleware = require('less-middleware');
var untappdKeys = {
  ClientID:	process.env.CLIENT_ID,
  ClientSecret:	process.env.CLIENT_SECRET
}



app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use(lessMiddleware(path.join(__dirname , 'public')));
app.use(express.static(path.join(__dirname, 'public')));

/*
*This returns all the views ill need, there is probably a generic way to do this
*/
app.get('/', function(req, res){
  res.render('index.html');
});


/*
*This gets all the user near a lat and lng
*/
app.get('/GetUsersNearBy', function(req,res){

  var requestJson = {
    client_id: untappdKeys.ClientID,
    client_secret: untappdKeys.ClientSecret,
    lat: req.query.lat,
    lng: req.query.lng,
    radius: 100
  };

  request.get('https://api.untappd.com/v4/thepub/local?' + qs.stringify(requestJson), function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(response.body);
    }
    else{
      console.log(response)
    }
  })
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
