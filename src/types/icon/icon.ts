import Search from "assets/icons/ic_Search.png";

export const IconComponents = {
  search: Search,
};

type iconName = typeof IconComponents;

export type iconProps = {
  name: keyof iconName;
  size?: number;
};
