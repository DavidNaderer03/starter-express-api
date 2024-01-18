const express = require('express')
const app = express()

app.use(express.static('./public'))

app.listen(process.env.PORT || 3000, () => {
    console.log(`Port listen to localhost:${process.env.PORT || 3000}`);
});