const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'templates')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'under-construction.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
