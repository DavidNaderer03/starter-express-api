const express = require('express');
const db = require('./files/db')
const fs = require('fs');
const {response} = require("express");
const Session = require('./script/session');
const app = express();
const session = new Session();
let countOfPlayer = 0;

app.use(express.static('./public'))

app.post('/api/authorize', async (req, res) => {
    const username = req.query.username;
    const password = req.query.password;
    if(username === 'test' && password === 'test') {
        await fs.readFile('./nonpublic/privacy.html', 'utf-8', (err, data) => {
            if(err) res.send('');
            countOfPlayer++;
            res.send(data);
        });
    }
});

app.post('/sudo/start', (req, res) => {
    session.restart(countOfPlayer);
    res.send('restart');
});

app.post('/api/input', (req, res) => {
    const input = req.query.input;
    session.add(input);
    res.send("Get request")
});

app.post('/sudo/addQuest', (req, res) => {
    const quest = req.query.question;
    session.addQuestion(quest);
    res.send('uploaded');
});

app.get('/api/isready', (req, res) => {
    const isReady = session.everyoneIsReady();
    if(isReady) {
        fs.readFile('./nonpublic/privacy.html', 'utf-8', (err, data) => {
            if(err) res.send('');
            res.send(data);
        });
    } else {
        res.send('Wait');
    }
});

app.listen(3000, () => {
    console.log(`Port listen to localhost:${process.env.PORT || 3000}`);
});