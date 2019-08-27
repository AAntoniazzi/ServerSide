var getProjects = function(){
    var projects = [
        {
            id: 1,
            name: 'Site SmarHome',
            image: 'project1.jpg',
            description: 'Site Smarthome',
            subject: 'Prog. Server Side'   
        },
        {
            id: 2,
            name: 'Testes de Software',
            image: 'project2.jpg',
            description: 'Aprendizagem TDD',
            subject: 'Testes de Software'  
        },
        {
            id: 3,
            name: 'Levantamento de requisitos',
            image: 'project3.jpg',
            description: 'Levantamento de requisitos',
            subject: 'Requisitos e Análise de Sistemas'  
        },
        {
            id: 4,
            name: 'Domótica',
            image: 'project4.jpg',
            description: 'Projeto PAC',
            subject: 'Fábrica de Software'  
        },
    ];
    return projects;
}


module.exports = {
    getProjects: getProjects
}