export const capitalize = (str) =>
  `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`;

export const removeDoubleQuotes = (string) => {
  return capitalize(string.replace(/"/g, ""));
};
