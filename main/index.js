'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Hello World!';
        }
    });

    server.route({
        method: 'GET',
        path: '/cards',
        handler: (request, h) => {
            return [{
                message: "Welcome to Handy!",
                icon: "smileBeam", 
                color: "lightBlueAccent",
            },
            {
                message: "Need some help?", 
                icon: "questionCircle", 
                color: "lightBlueAccent"
            },
            {
                message: "Add local and what you are planning to do", 
                icon: "searchLocation", 
                color: "lightBlueAccent"
            },
            {
                message: "Someone will receive your request to give you a hand!", 
                icon: "smileWink", 
                color: "lightBlueAccent"
            },
            {
                message: "Want to help someone?", 
                icon: "peopleCarry", 
                color: "lightBlueAccent"
            },
            {
                message: "Swipe between the cards for give a hand to someone.", 
                icon: "arrowsAltH", 
                color:  "lightBlueAccent"
            },
            {
                message: "Shall we begin?", 
                icon: "smileBeam", 
                color: "lightBlueAccent"
            },
        ];
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();



