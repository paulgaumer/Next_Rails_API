import Parser from 'rss-parser';

export const parseRss = async (url) => {
  let parser = new Parser();
  // const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
  const feed = await parser.parseURL(url);
  return feed;
};
