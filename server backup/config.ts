import dotenv from 'dotenv';
import { join } from 'path';
import { useConfig } from '@obisiket1/express-utils';

export enum AppENV {
  DEV = 'development',
  PROD = 'production',
  TEST = 'test',
}

dotenv.config({
  path: [AppENV.DEV, AppENV.TEST].includes(process.env.APP_ENV?.trim() as AppENV)
    ? join(__dirname, '..', '.env.dev')
    : join(__dirname, '..', '.env')
});

const config = useConfig({ exitOnFail: true });

console.log(`- App environment:: ${process.env.APP_ENV}`);

export default config({
  app: {
    bcryptRounds: +(process.env.APP_BCRYPT_ROUNDS || 10),
    staticFilePath: join(__dirname, '..', 'static'),
    port: +(process.env.APP_PORT || 3000),
    env: process.env.APP_ENV! as AppENV,
    secret: process.env.APP_SECRET!,
    uploadPath: join(__dirname, '..', 'uploads'),
    baseUrl: 'http://localhost:8000',
  },
  db: {
    uri: {
      db_uri: process.env.DB_URI!,
      authless_db_uri: process.env.AUTHLESS_DB_URI!
    },
    port: +(process.env.DB_PORT || 27017),
    authSource: process.env.DB_AUTH_SOURCE!,
    password:
      process.env.APP_ENV === 'test' ? process.env.TEST_DB_PASSWORD! : process.env.DB_PASSWORD! || '',
    name: process.env.APP_ENV === 'test' ? process.env.TEST_DB_NAME! : process.env.DB_NAME!,
    user: process.env.DB_USER! || '',
  },
  redis: {
    mode: process.env.REDIS_MODE! || 'standalone',
    host: process.env.REDIS_HOST!,
    port: +process.env.REDIS_PORT!,
    password: process.env.REDIS_PASSWORD!,
  },
  mail: {
    templatePath: join(__dirname, 'lib', 'mailer', 'templates'),
    apiKey: process.env.MAILJET_API_KEY!,
    secretKey: process.env.MAILJET_SECRET_KEY!,
  },
  telegram: {
    key: process.env.TELEGRAM_BOT_TOKEN!,
    chatId: process.env.TELEGRAM_GROUP_CHAT_ID!,
  }
});
