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

module.exports = router;
