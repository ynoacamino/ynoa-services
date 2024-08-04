import { z } from 'zod';

const envVars = z.object({
  CLIENT_ID_GITHUB: z.string(),
  CLIENT_SECRET_GITHUB: z.string(),
  NEXT_SECRET: z.string(),
  NEXTAUTH_URL: z.string(),
  CONNECTION_SECRET: z.string(),
});

envVars.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVars> {}
  }
}
