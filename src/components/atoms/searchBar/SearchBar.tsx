import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "./SearchBar.scss";
import Icon from "../icon/Icon";
import { useLocation, useNavigate } from "react-router-dom";
import { useEventEmitter } from "hooks/useEventEmitter";
import { ACTIONS } from "context/EventContext";

const SearchBar = () => {
  const query = new URLSearchParams(useLocation().search);
  const searchParam = query.get("search");
  const { emitEvent } = useEventEmitter();
  const [searchValue, setSearchValue] = useState<string>("");
  const navigate = useNavigate();

  const handleChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchValue !== "" && emitEvent(ACTIONS.LOADING_EVENT, true);
    navigate(searchValue !== "" ? `/items?search=${searchValue}` : "/");
  };

  useEffect(() => {
    if (searchParam) {
      setSearchValue(searchParam);
    }
  }, [searchParam]);

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
        <Icon name="Search" />
      </button>
    </form>
  );
};

export default SearchBar;
