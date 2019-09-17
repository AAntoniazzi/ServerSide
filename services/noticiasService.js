var getNoticias = function(){
    var noticias = [
        {
            id: 1,
            title: 'noticia 1',
            image: 'noticia.jpg',
            description: 'Minha primeira noticia',
            link: 'teste111111'   
        },
        {
            id: 2,
            title: 'noticia 2',
            image: 'noticia.jpg',
            description: 'Minha segunda noticia',
            link: 'teste22222'  
        },
        {
            id: 3,
            title: 'noticia 3',
            image: 'noticia.jpg',
            description: 'Minha terceita noticia',
            link: 'teste33333333'  
        },
        {
            id: 4,
            title: 'noticia 4',
            image: 'noticia.jpg',
            description: 'Minha quarta noticia',
            link: 'teste44444'  
        },
        {
            id: 5,
            title: 'noticia 5',
            image: 'noticia.jpg',
            description: 'Minha quinta noticia',
            link: 'teste555555'  
        },
        {
            id: 6,
            title: 'noticia 6',
            image: 'noticia.jpg',
            description: 'Minha sexta noticia',
            link: 'teste6'  
        }
    ];
    return noticias;
}


module.exports = {
    getNoticias: getNoticias
}