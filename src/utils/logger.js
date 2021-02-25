const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;

const config = require('../config')

const logger = createLogger({
  level: config.logger.level || 'info',
  format: combine(
    timestamp(),
    prettyPrint()
  ),
  transports: [new transports.Console()]
});

const log = (message, level) => {
    logger.log({
        level: level || 'info',
        message
    });
}


module.exports = {
    log
}