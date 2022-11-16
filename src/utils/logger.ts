import { pino } from 'pino';

const logger = pino(
  pino.transport({
    targets: [
      {
        level: 'info',
        target: 'pino-pretty',
        options: {
          colorize: true,
        },
      },
      {
        level: 'info',
        target: 'pino/file',
        options: { destination: `./logs/${new Date().toISOString()}.log` },
      },
    ],
  }),
);

export default logger;
