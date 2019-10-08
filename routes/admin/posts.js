var express = require('express');
var router = express.Router();
var postService = require ('../../services/postsService');

router.get('/', function(req, res, next) {
    var posts = postService.getPosts();

    var data = {
        posts:posts
    };

    res.render('admin/posts/index', data);
});

router.get('/create', function(req, res, next) {
    res.render('admin/posts/create');
});

router.post('/create', function(req, res, next) {
    var posts = postService.getPosts();

    var newPost = {};

    newPost.id = posts.length + 1;
    newPost.title = req.body.title;
    newPost.description = req.body.description;
    newPost.image = "post1.jpg";
    newPost.body = req.body.postBody;

    postService.savePost(newPost);

    res.redirect('/admin/posts');
});

module.exports = router;
