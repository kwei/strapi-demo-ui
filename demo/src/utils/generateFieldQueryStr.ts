export const generateFieldQueryStr = (fields: string[]) => {
  return `fields=${fields.join("&fields=")}`;
};

