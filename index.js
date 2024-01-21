const express = require('express');
const db = require('./files/db')
const app = express();
const securityKey = "ölö432asfdl2"

const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token || token !== securityKey) {
      return res.redirect('/');
    }
    next();
  };

app.use(express.static('./public'))

app.get('/pages/logged.html', authenticateToken, (req, res) => {
    res.send('This is a logged-in page!');
});

app.get('/api/log', (req, res) => {
    let rows = 0;
    const object = {
        username: req.query.username,
        password: req.query.password
    }
    const checkNameAndAgeQuery = 'SELECT COUNT(*) as count FROM users WHERE name = ? AND password = ?';
    db.action((connection) => {
        connection.get(checkNameAndAgeQuery, [object.username, object.password], (err, row) => {
            if (err) {
                console.error(err.message);
            } else {
                const rowCount = row.count;
                let rows = rowCount;
                if (rows > 0) {
                    return res.json({
                        valid: true
                    });
                }
            }
        });
    });
});

app.listen(3000, () => {
    console.log(`Port listen to localhost:${process.env.PORT || 3000}`);
});