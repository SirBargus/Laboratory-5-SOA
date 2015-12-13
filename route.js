var twitter = require('twitter'),
    conf = require('./conf.json');

var client = new twitter(conf.client);

module.exports = function(app){
    //Get HTML
    app.get('/', function(req, res){
        res.sendFile(__dirname + /public/index.html);
    }),
    //Get the result from search
    app.get('/search/:q/:c', function(req,res){
        client.get('search/tweets', {q: req.params.q, c: req.params.c}, 
                function(err, tweets, response){
             console.log(tweets); 
        });
    });
}
