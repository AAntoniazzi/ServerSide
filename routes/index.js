var express = require('express');
var router = express.Router();
var postService = require('../services/postsService');
var projectService = require('../services/projectsService');
/* GET home page. */
router.get('/', function(req, res, next) {
  var posts = postService.getPosts().slice(0, 3);

  res.render('index', { title: 'Blog', posts: posts });
});

router.get('/post/:postId' ,function(req, res, next){
  var postId = req.params.postId;

  var posts = postService.getPosts();
  var post = posts.filter((post) => post.id == postId)[0];

  res.render('post', { title: post.title, post: post});
});

router.get('/all', function(req, res, next) {
  var posts = postService.getPosts();
  res.render('index', { title: 'Blog', posts: posts });
});


router.get('/project/:projectId' ,function(req, res, next){
  var projectId = req.params.projectId;

  var projects = projectService.getProjects();
  var project = projects.filter((project) => project.id == projectId)[0];

  res.render('project', { title: project.title, project: project});
});


router.get('/project', function(req, res, next) {
  var projects = projectService.getProjects();
  res.render('projects', { title: 'Blog', projects: projects });
});

module.exports = router;
