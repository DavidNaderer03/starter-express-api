const express = require('express')
const app = express()

app.use(express.static('./public'))

app.get('/api/random', (req, res) => {
    return res.json("Hello");
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Port listen to localhost:${process.env.PORT || 3000}`);
});