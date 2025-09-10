const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('hi');
});

app.listen(PORT, () => {
    console.log(`서버시작: localhost:${PORT}`);
});
