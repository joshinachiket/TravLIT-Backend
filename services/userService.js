const MySQLConnection = require('../utils/MySQLConnection');

exports.listUsers = function (req, res) {

    const connection = new MySQLConnection({
        host: 'localhost',
        user: 'root',
        password: 'travellit',
        database: 'user',
        port: 3306
    });

    console.log("reached the service")

    connection.query('SELECT * FROM users')
        .then(results =>
            console.log(results)
        )
        .catch(error => console.error(error));

    connection.close();

};
