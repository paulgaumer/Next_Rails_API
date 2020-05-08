export const themeOff = (isThemed, style) => {
  return isThemed ? '' : style;
};
export const themeOn = (isThemed, style) => {
  return isThemed ? style : '';
};
