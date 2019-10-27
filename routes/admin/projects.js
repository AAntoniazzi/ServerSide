var express = require('express');
var router = express.Router();
var projectService = require ('../../services/projectService');

router.get('/', function(req, res, next) {
    var project = projectService.getProjects();

    var data = {
        projects:projects
    };

    res.render('admin/project/index', data);
});

router.get('/create', function(req, res, next) {
    res.render('admin/project/create');
});

router.project('/create', function(req, res, next) {
    var projects = projectService.getPrjects();

    var newPost = {};

    newPost.id = projects.length + 1;
    newPost.title = req.body.title;
    newPost.description = req.body.description;
    newPost.image = "post1.jpg";
    newPost.body = req.body.projectBody;

    projectService.savePost(newProject);

    res.redirect('/admin/project');
});

module.exports = router;
