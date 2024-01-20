import Search from "assets/icons/ic_Search.png";
import Shipping from "assets/icons/ic_shipping.png";
export const IconComponents = {
  Search,
  Shipping,
};

type iconName = typeof IconComponents;

export type iconProps = {
  name: keyof iconName;
  size?: number;
};
