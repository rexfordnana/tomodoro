import {createLogger, stdSerializers} from 'bunyan';

const logger = createLogger({
  name: 'tomodoro',
  level: 'info',
  serializers: stdSerializers,
});

export default logger;
