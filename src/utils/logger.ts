import { createLogger, transports, format } from 'winston';

const colors = {
    info: 'white',
    debug: 'blue',
    warn: 'yellow',
    error: 'red'
};

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.printf(
            ({ timestamp, level, message }) => `[${timestamp}] ${level.toUpperCase()}: ${message}`
        ),
        format.colorize({
            all: true,
            colors: colors,
        }),
    ),
    transports: [new transports.Console()],
});

export default logger;