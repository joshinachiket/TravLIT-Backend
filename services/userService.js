const validator = require('validator');
const config = require('config');

const MySQLConnection = require('../utils/MySQLConnection');
const connection = MySQLConnection.createConnection(config.mysql);

let userQueryFactory = require('../dao/userQueryFactory')

exports.listUsers = async (req, res) => {
    try {
        console.log("reached the service")
        const results = await connection.query('SELECT * FROM users');
        console.log(results);
    } catch (error) {
        console.error(error);
    }
};

exports.login = (username, password) => {
    return new Promise((resolve, reject) => {

        if (!validator.isAlphanumeric(username) || !validator.isLength(username, { min: 4, max: 12 })) {
            reject(new Error('Invalid username'));
        } else if (!validator.isLength(password, { min: 8, max: 20 })) {
            reject(new Error('Invalid password'));
        } else {
            // const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`
            const query = userQueryFactory.getQuery('login', { username: username, password: password });
            connection.query(query, values)
                .then(results => {
                    if (!results.length) {
                        const err = new Error('Invalid credentials');
                        err.statusCode = 401;
                        reject(err);
                    } else {
                        resolve({ message: 'login successful' });
                    }
                })
                .catch(error => {
                    reject(error);
                })
        }
    });
};