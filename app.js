const express = require('express');
const bodyParser = require('body-parser');
var _ = require('lodash');
const app = express();

app.set('view engine', "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))

// let title = [];
// let details = [];
// let urlss = [];
let posts = []

app.get('/', function (req, res) {
    res.render('home', { posts:posts});
    console.log(posts);
})
app.get('/about', function (req, res) {
    res.render('about');  
})

app.get('/blog/:day', function (req, res) {
    var  requestedUrl =req.params.day
    requestedUrl = _.lowerCase([string = requestedUrl])
    
    for (let index = 0; index < posts.length; index++) {
        var storedUrl = posts[index].title;
        storedUrl = _.lowerCase([string = storedUrl])
        
  
    if(requestedUrl=== storedUrl){
        console.log("Match found")
        res.render('blog', {
            title : posts[index].title,
            content : posts[index].details
            })
        }
    }
})
app.get('/contact', function (req, res) {
    res.render('contact');
    
})
app.get('/blog', function (req, res) {
    res.render('blog');
    
})

app.get('/compose', function (req, res) {
    res.render('compose');
    
})

app.post('/compose', function(req, res){
    // title.push(req.body.title);
    // details.push(req.body.details)

    post = {
        title: req.body.title,
        details : req.body.details
    }
    posts.push(post);
    
    res.redirect('/')

})




app.listen("5000", function () {
    console.log("listening to port 5000");
})
