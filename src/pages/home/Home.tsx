import "./Home.scss";
import BreadCrumbs from "components/atoms/breadCrumbs/BreadCrumbs";
import ListResultCard from "components/molecules/listResultCard/ListResultCard";
import { useEventEmitter } from "hooks/useEventEmitter";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ItemsFormatted } from "types/utilities";
import { getItemsInFormat } from "utilities/servicesItems";

const Home = () => {
  const query = new URLSearchParams(useLocation().search);
  const searchValue = query.get("search");
  const { emitEvent } = useEventEmitter();
  const [data, setData] = useState<ItemsFormatted>();

  useEffect(() => {
    if (searchValue) {
      getItemsInFormat(searchValue).then((data) => {
        setData(data);
        emitEvent("LOADING_EVENT", false);
      });
    }
  }, [searchValue]);

  return (
    <div>
      {searchValue && (
        <>
          <BreadCrumbs />
          <ListResultCard items={data?.items} />
        </>
      )}
    </div>
  );
};

export default Home;
