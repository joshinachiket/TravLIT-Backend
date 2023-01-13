const userService = require('../services/userService');

exports.getUsers = async (req, res) => {
    try {
        const users = await userService.listUsers();
        res.json(users);
    } catch (error) {
        console.error(error);
    } finally {
        userService.closeConnection();
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const result = await userService.login(username, password);
        console.log(result)
        res.json(result);
    } catch (error) {
        console.error(error);
    } finally {
        userService.closeConnection();
    }
};
