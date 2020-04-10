const functions = require('firebase-functions');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello from Firebase from express!");
});


app.get('/cards', (req, res) => {
    res.send([
            {
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
        ]);
    }
);

exports.app = functions.https.onRequest(app);
