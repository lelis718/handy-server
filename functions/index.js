const admin = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');

let serviceAccount = require('./service-account-key.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();
const app = express();

app.get('/', (req, res) => {
    res.send("Hello from Firebase from express!");
});

app.get('/help/others/:userId', (req, res) => {
    var userId = req.params.userId;

    let helps = [];
    db.collection('help').get()
        .then((snapshot) => {
            snapshot.docs.filter((doc) => doc.data().user != userId).forEach((doc) => {
                helps.push(doc.data());
            });

            res.send(helps);
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });
});

app.get('/help/my/:userId', (req, res) => {

    var userId = req.params.userId;

    let helps = [];
    db.collection('help').where("user", "==", userId).get()
        .then((snapshot) => {
            console.log(snapshot);
            snapshot.forEach((doc) => {
                helps.push(doc.data());
            });

            res.send(helps);
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });
});

app.post('/help', (req, res) => {
    db.collection('help').doc().set({
        'id': req.body.id,
        'user': req.body.user,
        'message': req.body.message
    });

    res.status(200).send();
});

exports.app = functions.https.onRequest(app);
