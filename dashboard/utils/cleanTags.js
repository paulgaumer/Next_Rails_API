export const cleanTags = (text) => {
  const reg = /<("[^"]*"|'[^']*'|[^'">])*>/;
  const cleanText = text.replace(reg, '');
  return cleanText;
};
