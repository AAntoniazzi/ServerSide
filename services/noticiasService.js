var getNoticias = function(){
    var noticias = [
        {
            id: 1,
            title: 'noticia 1',
            image: 'noticia.jpg',
            description: 'Minha primeira noticia',
            link: 'http://www.google.com'  
        },
        {
            id: 2,
            title: 'noticia 2',
            image: 'noticia.jpg',
            description: 'Minha segunda noticia',
            link: 'http://www.link2.com'  
        },
        {
            id: 3,
            title: 'noticia 3',
            image: 'noticia.jpg',
            description: 'Minha terceita noticia',
            link: 'http://www.facebook.com'
        },
        {
            id: 4,
            title: 'noticia 4',
            image: 'noticia.jpg',
            description: 'Minha quarta noticia',
            link: 'http://www.pudim.com'
        },
        {
            id: 5,
            title: 'noticia 5',
            image: 'noticia.jpg',
            description: 'Minha quinta noticia',
            link: 'http://www.jesus.com' 
        },
        {
            id: 6,
            title: 'noticia 6',
            image: 'noticia.jpg',
            description: 'Minha sexta noticia',
            link: 'http://www.g1.com'
        }
        
    ];
    return noticias;
}


module.exports = {
    getNoticias: getNoticias
}