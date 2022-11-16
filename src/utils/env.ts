import { z } from 'zod';

const envSchema = z.object({
  EXAMPLE_VAR: z.string().min(1),
});

export default envSchema.parse(process.env);
