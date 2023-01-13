// Global Variables
global.rootdir = __dirname;

const config = require('config');
const express = require('express');
const app = express();
app.use(express.json());

const userRouter = require('./routes/userRouter');

app.use('/', userRouter);

app.use((error, req, res, next) => {
    console.log("kuchh to gadbad hai")
});

app.listen(config.app.port, function (req, res) {
    console.log("Travel - Lit Listening On Port: ", config.app.port)
})