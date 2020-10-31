require('dotenv').config();
module.exports = {
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    API_HOST: process.env.API_HOST,
    INSTAGRAM_CLIENT_ID: process.env.INSTAGRAM_CLIENT_ID,
    INSTAGRAM_CLIENT_SECRET: process.env.INSTAGRAM_CLIENT_SECRET,
    INSTAGRAM_OAUTH_REDIRECT: process.env.INSTAGRAM_OAUTH_REDIRECT,
    EARLY_ACCESS_CODE: process.env.EARLY_ACCESS_CODE,
    CONVERTKIT_API_KEY: process.env.CONVERTKIT_API_KEY,
    FACEBOOK_PIXEL_ID: process.env.FACEBOOK_PIXEL_ID,
    SLACK_WEBHOOK_URL: process.env.SLACK_WEBHOOK_URL,
  },
};
