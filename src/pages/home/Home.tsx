import "./Home.scss";
import BreadCrumbs from "components/atoms/breadCrumbs/BreadCrumbs";
import ListResultCard from "components/molecules/listResultCard/ListResultCard";
import { getItemsInFormat } from "utilities/servicesItems";
import { ItemsFormatted } from "types/utilities";
import { useEffect, useState } from "react";
import { useEventEmitter } from "hooks/useEventEmitter";
import { useLocation } from "react-router-dom";
import { ACTIONS } from "context/EventContext";

const Home = () => {
  const [data, setData] = useState<ItemsFormatted>();
  const { emitEvent } = useEventEmitter();
  const query = new URLSearchParams(useLocation().search);
  const searchValue = query.get("search");

  useEffect(() => {
    if (searchValue) {
      getItemsInFormat(searchValue).then((data) => {
        setData(data);
        emitEvent(ACTIONS.LOADING_EVENT, false);
        emitEvent(ACTIONS.LOAD_INFO_BREADCRUMB, {
          bestCategory: data.bestCategory,
          filters: data.filters,
          availableFilters: data.availableFilters,
        });
      });
    }
  }, [searchValue]);

  return (
    <div>
      {searchValue && (
        <>
          <BreadCrumbs filters={data?.bestCategory} />
          <ListResultCard items={data?.items} />
        </>
      )}
    </div>
  );
};

export default Home;
