import { ChangeEvent, FormEvent, useState } from "react";
import "./SearchBar.scss";
import Icon from "../icon/Icon";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submit", searchValue);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        placeholder="Nunca dejes de buscar..."
        aria-label="Buscador de productos"
        title="Buscador de productos"
        onChange={handleChangeSearchValue}
        value={searchValue}
        type="text"
      />
      <button aria-label="Buscar" type="submit">
        <Icon name="search" />
      </button>
    </form>
  );
};

export default SearchBar;
