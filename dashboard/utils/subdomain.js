const getSubdomainFromBrowser = () => {
  return window.location.hostname.split('.')[0];
};
const getDomainFromBrowser = () => {
  const domain = window.location.hostname;
  const port = window.location.port;
  // const protocol = window.location.protocol;
  return `${domain}:${port}`;
};

const getSubdomainFromServer = (req) => {
  return req.headers.host.split('.')[0];
};
const getDomainFromServer = (req) => {
  return req.headers.host;
};

export const getSubdomain = (req) => {
  return typeof window === 'undefined'
    ? getSubdomainFromServer(req)
    : getSubdomainFromBrowser();
};
export const getDomain = (req) => {
  return typeof window === 'undefined'
    ? getDomainFromServer(req)
    : getDomainFromBrowser();
};
