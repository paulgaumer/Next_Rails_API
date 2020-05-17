require('dotenv').config();
module.exports = {
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    API_HOST: process.env.API_HOST,
    INSTAGRAM_CLIENT_ID: process.env.INSTAGRAM_CLIENT_ID,
    INSTAGRAM_CLIENT_SECRET: process.env.INSTAGRAM_CLIENT_SECRET,
    INSTAGRAM_OAUTH_REDIRECT: process.env.INSTAGRAM_OAUTH_REDIRECT,
  },
};
