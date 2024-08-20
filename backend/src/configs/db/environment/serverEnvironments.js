// import * as dotenv from 'dotenv';
// dotenv.config();

export default {
    SECRET_TOKEN_KEY:  process.env.SECRET_TOKEN_KEY || '',
    SECRET_REFRESH_KEY: process.env.SECRET_REFRESH_KEY || '',
    RESFRESH_TOKEN_EXPIRATION: process.env.TOKEN_EXPIRATION ||'1D',
    TOKEN_EXPIRATION: process.env.TOKEN_EXPIRATION ||'5H',
    HOST:process.env.HOST || 'http://localhost:3500'
}