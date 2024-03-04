import { env } from './utils/env';

(async () => {
  console.log(`[node-starter] Application is running`);
  console.log(
    `[node-starter] Example environment variable (EXAMPLE_VAR): ${env.EXAMPLE_VAR}`,
  );
})();
