const MySQLConnection = require('../utils/MySQLConnection');

const connection = new MySQLConnection({
    host: 'localhost',
    user: 'root',
    password: 'travellit',
    database: 'user',
    port: 3306
});

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
        console.log("honey")
        connection.query(
            'SELECT * FROM users WHERE username = ? AND password = ?',
            [username, password],
            (error, results) => {
                if (error) {
                    reject(error);
                } else if (!results.length) {
                    const err = new Error('Invalid credentials');
                    err.statusCode = 401;
                    reject(err);
                } else {
                    console.log(results)
                    resolve({ message: 'login successful' });
                }
            }
        );
    });
};

exports.closeConnection = function () {
    connection.close()
}