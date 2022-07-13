export const isString = (b: any): b is string => {
  return b !== undefined && typeof b === 'string';
};
