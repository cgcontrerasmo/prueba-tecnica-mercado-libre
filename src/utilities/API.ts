import axios from "axios";
import { DataItems } from "../types/utilities";

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
