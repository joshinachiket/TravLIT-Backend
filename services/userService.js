const validator = require('validator');
const config = require('config');

const MySQLConnection = require('../utils/MySQLConnection');
const connection = MySQLConnection.createConnection(config.mysql);

const userQueryFactory = require('../dao/userQueryFactory')

exports.listUsers = async (req, res) => {
    try {
        console.log("reached the service")
        const query = userQueryFactory.getQuery('listUsers');
        const results = await connection.query(query);
        console.log(results);
        //connection.end();
        return results
    } catch (error) {
        console.error(error);
        //connection.destroy();
    }
};

exports.login = (username, password) => {
    return new Promise((resolve, reject) => {

        if (!validator.isAlphanumeric(username) || !validator.isLength(username, { min: 4, max: 12 })) {
            reject(new Error('Invalid username'));
        } else if (!validator.isLength(password, { min: 8, max: 20 })) {
            reject(new Error('Invalid password'));
        } else {
            const query = userQueryFactory.getQuery('login', { username: username, password: password });
            connection.query(query).then(results => {
                if (!results.length) {
                    const err = new Error('Invalid credentials');
                    err.statusCode = 401;
                    reject(err);
                } else {
                    resolve({ message: 'login successful' });
                }
            }).catch(error => {
                reject(error);
            })
        }
    });
};