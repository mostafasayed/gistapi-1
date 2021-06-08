export const dateDisplay = (dateToDisplay) => {
  const fullDate = new Date(dateToDisplay);
  return (
    fullDate.getUTCMonth() +
    1 +
    "/" +
    fullDate.getUTCDate() +
    "/" +
    fullDate.getUTCFullYear()
  );
};
