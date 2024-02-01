const fs = require('fs');

function WriteInFile(message) {
    fs.appendFile('../files/answer.txt', message, (err) => {
        if(err) throw err;
    });
}

module.exports = { WriteInFile }