export const validateHtmlBlock = (
  data: DynamicZoneComponentType,
): data is HTMLContent => {
  return data.__component.split(".")[0] === "html-block";
};

export const validateMediaBlock = (
  data: DynamicZoneComponentType,
): data is MediaContent => {
  return data.__component.split(".")[0] === "single-media";
};

export const validateProsConsBlock = (
  data: DynamicZoneComponentType,
): data is ProsConsContent => {
  return data.__component.split(".")[0] === "pros-cons";
};
