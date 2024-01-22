import "./Detail.scss";
import BreadCrumbs from "components/atoms/breadCrumbs/BreadCrumbs";
import ResultDetail from "components/molecules/resultDetail/itemDetail";
import { CategoriesFormatted } from "types/detail";
import { getInfoItemInFormat } from "utilities/servicesItem";
import { ItemInfoFormatted } from "types/utilities";
import { useEffect, useState } from "react";
import { useEventEmitter } from "hooks/useEventEmitter";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const { emitEvent, events } = useEventEmitter();
  const [data, setData] = useState<ItemInfoFormatted>();
  const [categories, setCategories] = useState<CategoriesFormatted[]>();

  const handleSelectFilters = (categoryId: string) => {
    if (events.filters) {
      setCategories(events.filters[0].path_from_root);
    } else if (
      events?.bestCategory?.length > 0 &&
      !events.bestCategory.some(
        (category: CategoriesFormatted) => category.id === categoryId
      )
    ) {
      const categoryItem = events?.availableFilters?.filter(
        (availableFilter: CategoriesFormatted) =>
          availableFilter.id === categoryId
      );
      setCategories(
        categoryItem?.length > 0 ? categoryItem : events.bestCategory
      );
    } else {
      setCategories(events.bestCategory);
    }
  };

  useEffect(() => {
    getInfoItemInFormat(id).then((data) => {
      setData(data);
      handleSelectFilters(data.item.category_id);
      emitEvent("LOADING_EVENT", false);
    });
  }, [id]);

  return (
    <div>
      <BreadCrumbs filters={categories} />
      <ResultDetail item={data?.item} />
    </div>
  );
};

export default Detail;
