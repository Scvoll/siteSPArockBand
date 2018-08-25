const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve('./build')));

app.get('/', (req,res) => {
   res.sendFile(path.resolve('./build/index.html'))
});

app.get('/get_rider', (req,res) => {
    res.download('./filesForUsers/kvartet-rider.txt', 'КиД-техрайдер.txt');
});

app.listen(3000, () => console.log('listening port 3000'));