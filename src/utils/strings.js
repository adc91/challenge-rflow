export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const joinValuesWithSeparator = (separator, ...args) => {
  return args.filter(Boolean).join(separator);
};
