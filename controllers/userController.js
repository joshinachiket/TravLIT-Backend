const config = require('config');
const userService = require('../services/userService');
const MyLogger = require('../utils/Logger')
const logger = new MyLogger()


exports.getUsers = async (req, res) => {
    try {
        const users = await userService.listUsers();
        logger.log('info', `User ${username} successfully logged in`);
        res.json(users);
    } catch (error) {
        logger.log('error', `User ${username} successfully logged in`);
        res.status(error.statusCode || 500).json({ message: error.message });
    } finally {
        userService.closeConnection();
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const result = await userService.login(username, password);
        logger.log('info', `User ${username} successfully logged in`);
        res.json(result);
    } catch (error) {
        logger.log('error', error.message);
        res.status(error.statusCode || 500).json({ message: error.message });
    }
};
