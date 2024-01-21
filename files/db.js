const sqlite3 = require('sqlite3').verbose();

function action(callback) {
    const db = new sqlite3.Database('C:\\Users\\david\\OneDrive\\Desktop\\NodeJs\\myApi\\files\\example.db', sqlite3.OPEN_CREATE | sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('Connected to the database');
        }
    });
    callback(db);
    db.close((err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('Closed the database connection');
        }
    });
}


module.exports = { action }