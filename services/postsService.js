var getPosts = function(){
    var posts = [
        {
            id: 1,
            title: 'Post 1',
            image: 'post1.jpg',
            description: 'Meu primeiro post',
            body: 'teste111111'   
        },
        {
            id: 2,
            title: 'Post 2',
            image: 'post2.jpg',
            description: 'Meu segundo post',
            body: 'teste22222'  
        },
        {
            id: 3,
            title: 'Post 3',
            image: 'post3.jpg',
            description: 'Meu terceito post',
            body: 'teste33333333'  
        },
        {
            id: 4,
            title: 'Post 4',
            image: 'post4.jpg',
            description: 'Meu quarto post',
            body: 'teste44444'  
        },
        {
            id: 5,
            title: 'Post 5',
            image: 'post5.jpg',
            description: 'Meu quinto post',
            body: 'teste555555'  
        }
    ];
    return posts;
}


module.exports = {
    getPosts: getPosts
}