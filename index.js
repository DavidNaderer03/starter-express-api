const express = require('express');
const db = require('./files/db')
const app = express();

app.use(express.static('./public'))

app.listen(3000, () => {
    console.log(`Port listen to localhost:${process.env.PORT || 3000}`);
});