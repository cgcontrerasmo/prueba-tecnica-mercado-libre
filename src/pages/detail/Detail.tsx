import BreadCrumbs from "components/atoms/breadCrumbs/BreadCrumbs";
import "./Detail.scss";
import ResultDetail from "components/molecules/resultDetail/itemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getInfoItemInFormat } from "utilities/servicesItem";
import { useEventEmitter } from "hooks/useEventEmitter";
import { ItemInfoFormatted } from "types/utilities";

const Detail = () => {
  const { id } = useParams();
  const { emitEvent } = useEventEmitter();
  const [data, setData] = useState<ItemInfoFormatted>();

  useEffect(() => {
    getInfoItemInFormat(id).then((data) => {
      setData(data);
      emitEvent("LOADING_EVENT", false);
    });
  }, [id]);

  console.log("Data", data);
  return (
    <div>
      <BreadCrumbs />
      <ResultDetail item={data?.item} />
    </div>
  );
};

export default Detail;
