const express = require('express')
const app = express()
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, '/dist')));

app.get('/', async function (req, res) {
    res.sendFile("index.html", { root: path.join(__dirname, '/dist') });
});

app.get('/data', function (req, res) {
    var fs = require('fs');
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

app.listen(port, () => console.log(`Server works on ${port}`));