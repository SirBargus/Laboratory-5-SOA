var twitter = require('twitter'),
    conf = require('./config.json');

var client = new twitter(conf.client);

module.exports = function(app){
    //Get HTML
    app.get('/', function(req, res){
        res.sendFile(__dirname + "/public/index.html");
    }),
    //Get the result from search
    app.get('/search', function(req,res){
        client.get('search/tweets', {q: req.query.q, count: req.query.c},
                function(err, tweets, response){
             if (err) res.sendStatus(400);
             else res.send(tweets.statuses);
        });
    }),
    //Send a tweet to your account
    app.get('/sendTweet', function(req, res){
        client.post('statuses/update', {status: req.query.msg}, function(error, tweet, response){
            if (error) res.sendStatus(400);
            else res.sendStatus(200);
        });
    });
}
