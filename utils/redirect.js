import Router from 'next/router';

export const redirect = (ctx, path) => {
  if (typeof window === 'undefined') {
    ctx.res.writeHead(301, { Location: path });
    ctx.res.end();
    return {};
  }

  Router.push(path);
  return {};
};
