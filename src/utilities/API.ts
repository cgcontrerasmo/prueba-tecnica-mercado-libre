/* istanbul ignore file */
import axios from "axios";
import { DataItems, ItemDescription, ItemInfo } from "../types/utilities";

export const getItems = async (searchValue: string): Promise<DataItems> => {
  try {
    const { data } = await axios.get<DataItems>(
      "https://api.mercadolibre.com/sites/MLA/search",
      {
        params: { q: searchValue },
      }
    );
    return data;
  } catch (error) {
    console.error("Error al obtener datos de los items:", error);
    throw error;
  }
};

export const getItemInfo = async (idItem: string): Promise<ItemInfo> => {
  try {
    const { data } = await axios.get<ItemInfo>(
      `https://api.mercadolibre.com/items/${idItem}`
    );
    return data;
  } catch (error) {
    console.error("Error al obtener datos del item:", error);
    throw error;
  }
};

export const getItemDescription = async (
  idItem: string
): Promise<ItemDescription> => {
  try {
    const { data } = await axios.get<ItemDescription>(
      `https://api.mercadolibre.com/items/${idItem}/description`
    );
    return data;
  } catch (error) {
    console.error("Error al obtener la descripción del item:", error);
    throw error;
  }
};
