export const formatePrice = (price = 0): string => {
  const formatOptions = {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };

  return price.toLocaleString("es-CO", formatOptions);
};
