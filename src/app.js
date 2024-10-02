import express from 'express';

const server = express();

server.get('/', (req, res) => {
    res.send("hello OG");
});

server.get('/test', (req, res) => {
    res.send("hello test");
});

server.get('/help', (req, res) => {
    res.send("helloo helool");
});

server.listen(3000, () => {
    console.log("server is running on port 3000");
});
