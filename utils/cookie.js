import cookie from 'js-cookie';

const getCookieFromBrowser = (cookieName) => cookie.get(cookieName);

const getCookieFromServer = (cookieName, req) => {
  if (!req.headers.cookie) return false;

  const rawCookie = req.headers.cookie
    .split(';')
    .find((c) => c.trim().startsWith(`${cookieName}=`));
  if (!rawCookie) return false;
  const [, token] = rawCookie.split('=');
  if (!token) return false;

  return token;
};

export const getCookie = (cookieName, req) => {
  if (process.browser) return getCookieFromBrowser(cookieName);
  return getCookieFromServer(cookieName, req);
};
