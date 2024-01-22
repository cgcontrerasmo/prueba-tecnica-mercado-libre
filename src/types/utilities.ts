export type DataItems = {
  filters: Filter[];
  available_filters: AvailableFilters[];
  results: {
    id: string;
    title: string;
    installments: {
      currency_id: string;
    };
    price: number;
    thumbnail: string;
    condition: string;
    shipping: {
      free_shipping: boolean;
    };
    address: {
      state_name: string;
    };
  }[];
};

export type Filter = {
  id: string;
  name: string;
  type: "text" | "number" | "boolean" | "range" | "STRING";
  values: {
    id: string;
    name: string;
    path_from_root: {
      id: string;
      name: string;
    };
  }[];
};

export type AvailableFilters = {
  id: string;
  name: string;
  type: "text" | "number" | "boolean" | "range" | "STRING";
  values: ValuesAvailableFilters[];
};

export type ValuesAvailableFilters = {
  id: string;
  name: string;
  results: number;
};

export type ItemsFormatted = {
  author: {
    name: string;
    lastName: string;
  };
  bestCategory: Filter["values"] | ValuesAvailableFilters;
  filters: Filter["values"];
  items: {
    id: string;
    title: string;
    prince: {
      currency: string;
      amount: number;
      decimals: number;
    };
    picture: string;
    condition: string;
    free_shipping: boolean;
  }[];
};

export type ItemInfo = {
  id: string;
  title: string;
  currency_id: string;
  price: number;
  thumbnail: string;
  condition: string;
  shipping: {
    free_shipping: string;
  };
  sold_quantity: string;
  category_id: string;
};

export type ItemDescription = {
  plain_text: string;
};

export type ItemInfoFormatted = {
  author: {
    name: string;
    lastName: string;
  };
  item: {
    id: string;
    title: string;
    price: {
      currency: string;
      amount: number;
      decimals: number;
    };
    picture: string;
    condition: string;
    free_shipping: string;
    sold_quantity: string;
    description: string;
    category_id: string;
  };
};
