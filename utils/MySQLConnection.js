const mysql = require('mysql2');

class MySQLConnection {
    constructor(options) {
        this.options = options;
        this.connection = mysql.createConnection(options);
    }

    query(sql, data = []) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, data, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    end() {
        this.connection.end()
    }

}

module.exports = {
    createConnection: options => new MySQLConnection(options)
}
