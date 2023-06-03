const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
console.log(process.env.PORT);
const port = process.env.PORT;

app.use(express.static(path.join(__dirname, 'templates')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'under-construction.html'));
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${port}`);
});

module.exports = app;