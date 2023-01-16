const config = require('config');
winston = require('winston')
class Logger {
    // constructor
    constructor() {
        this.deafaultLevel = config.log.level
        this.transports = []
        if (config.log.console) {
            this.transports.push(new winston.transports.Console())
        }
        if (config.log.file.enabled) {
            this.transports.push(new winston.transports.File({
                filename: config.log.file.filename
            }))
        }
        if (config.log.http.enabled) {
            this.transports.push(new winston.tranports.Http({
                host: config.log.http.host,
                port: config.log.http.port,
                path: config.log.http.path
            }))
        }
    }

    log(level, message) {
        level = level ? level : this.defaultLevel;
        this.logger = winston.createLogger({
            level: level,
            transports: this.transports
        });
        this.logger[level](message);
    }
}

module.exports = Logger;