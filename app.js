// Global Variables
global.rootdir = __dirname;

const config = require('config');
const express = require('express');
const app = express();

const userRouter = require('./routes/userRouter');

app.use('/', userRouter);

app.listen(config.app.port, function (req, res) {
    console.log("Travel - Lit Listening On Port: ", config.app.port)
})