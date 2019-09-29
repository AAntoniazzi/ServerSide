var fs = require('fs');

var postsFilePath = 'db/posts.json'

var getPosts = function(){
    var fileData = fs.readFileSync(postsFilePath, 'utf8');
    var posts = JSON.parse(fileData);

    return posts;
}


module.exports = {
    getPosts: getPosts
}