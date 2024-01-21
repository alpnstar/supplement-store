const express = require('express');
const path = require('path');
const app = express();

// ... другие настройки сервера

app.use(express.static(path.resolve(__dirname, '../bundle')));

app.get('/*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../bundle/index.html'));
});

// ... другие настройки сервера

app.listen(1111, () => {
    console.log(`Server is running on port ${1111}`);
});