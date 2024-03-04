import { env } from './utils/env';

(async () => {
  console.log(
    `🔧 Using environment variable (EXAMPLE_VAR): ${env.EXAMPLE_VAR}`,
  );
})();
