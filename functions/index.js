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

app.get('/cards', (req, res) => {
    let cards = [];
    db.collection('cards').get()
        .then((snapshot) => {
            console.log(snapshot);
            snapshot.forEach((doc) => {
                cards.push(doc.data());
            });

            res.send(cards);
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });
    }
);

exports.app = functions.https.onRequest(app);
