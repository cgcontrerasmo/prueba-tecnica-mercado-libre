import { getItems } from "./API";
import { ValuesAvailableFilters } from "types/utilities";

const getBestCategory = (
  values: ValuesAvailableFilters[] | undefined
): ValuesAvailableFilters[] | undefined => {
  if (values) {
    const bestCategory = values.reduce((maxObject, currentObject) => {
      return currentObject.results > maxObject.results
        ? currentObject
        : maxObject;
    }, values[0]);
    return [bestCategory];
  }
};

export const getItemsInFormat = async (searchValue: string) => {
  const data = await getItems(searchValue);
  const filters = data.filters[0]?.values;
  const availableFilters = data.available_filters.find((available_filter) => {
    return available_filter.id === "category";
  })?.values;

  const items = data.results.splice(0, 4).map((item) => {
    return {
      id: item.id,
      title: item.title,
      prince: {
        currency: item.installments?.currency_id,
        amount: item.price,
        decimals: 0,
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
    };
  });

  const response = {
    author: {
      name: "Cristhian Geovani",
      lastName: "Contreras Moncada",
    },
    items,
    filters,
    availableFilters,
    bestCategory: filters || getBestCategory(availableFilters),
  };

  return response;
};
