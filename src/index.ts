import env from './utils/env';
import logger from './utils/logger';

(async () => {
  logger.info(env, 'Hello, world!!');
})();
