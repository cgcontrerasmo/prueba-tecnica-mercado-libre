/* istanbul ignore file */
import { getItemDescription, getItemInfo } from "./API";

export const getInfoItemInFormat = async (idItem = "") => {
  const itemInfo = await getItemInfo(idItem);
  const ItemDescription = await getItemDescription(idItem);

  const response = {
    author: {
      name: "Cristhian Geovani",
      lastName: "Contreras Moncada",
    },
    item: {
      id: itemInfo.id,
      title: itemInfo.title,
      price: {
        currency: itemInfo.currency_id,
        amount: itemInfo.price,
        decimals: 0,
      },
      picture: itemInfo.thumbnail,
      condition: itemInfo.condition,
      free_shipping: itemInfo.shipping.free_shipping,
      sold_quantity: itemInfo.sold_quantity,
      description: ItemDescription.plain_text,
      category_id: itemInfo.category_id,
    },
  };

  return response;
};
