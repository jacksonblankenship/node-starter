import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  server: {
    EXAMPLE_VAR: z.string().min(1),
  },
  runtimeEnv: process.env,
});
