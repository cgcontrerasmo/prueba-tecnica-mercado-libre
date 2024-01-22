import { ItemInfoFormatted } from "./utilities";

export type ItemDetailProps = {
  item?: ItemInfoFormatted["item"];
};

export type CategoriesFormatted = {
  id: string;
  name: string;
};
