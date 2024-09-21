export const ENV = {
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    DD_AGENT: process.env.DD_AGENT,
    DD_ENV: process.env.DD_ENV,
} as { [key: string]: string };
