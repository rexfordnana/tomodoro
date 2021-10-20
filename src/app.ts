import logger from './lib/logger';

const log = logger.child({test: 'Testing stuff'});

const names = ["Alice", "Bob", "Eve"];

log.info({names}, 'This should have the app name');
