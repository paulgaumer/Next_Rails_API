export const formatDate = (dateString) => {
  const obj = new Date(dateString);
  const date = obj.toDateString().split(' ');
  date.shift();
  const newDate = date.join(' ');
  return newDate;
};
