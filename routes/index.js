var express = require('express');
var router = express.Router();
var postService = require('../services/postsService');
var projectService = require('../services/projectsService');
var noticiaService = require('../services/noticiasService');

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

  var project = projectService.getProjects();
  var projects = project.filter((projects) => projects.id == projectId)[0];

  res.render('project', { title: projects.title, projects: projects});
});


router.get('/project', function(req, res, next) {
  var projects = projectService.getProjects();
  res.render('projects', { title: 'Blog', projects: projects });
});

router.get('/noticia/:noticiaId' ,function(req, res, next){
  var noticiaId = req.params.noticiaId;

  var noticias = noticiaService.getNoticias();
  var noticia = noticias.filter((noticia) => noticia.id == noticiaId)[0];

  res.render('noticia', { title: noticia.title, noticia: noticia});
});


router.get('/noticia', function(req, res, next) {
  var noticias = noticiaService.getNoticias();
  res.render('noticias', { title: 'Blog', noticias: noticias });
});


module.exports = router;
