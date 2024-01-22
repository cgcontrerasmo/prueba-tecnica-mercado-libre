import "./ListResultCard.scss";
import BasicLayout from "components/templates/BasicLayout/BasicLayout";
import ResultCard from "components/atoms/resultCard/ResultCard";
import { listResultCardProps } from "types/listResultCard";
import { useMemo } from "react";

const ListResultCard = ({ items }: listResultCardProps) => {
  const itemsList = useMemo(
    () =>
      items &&
      items.map((item, index) => (
        <ResultCard
          key={`result-card${index}`}
          info={{
            id: item.id,
            description: item.title,
            image: item.picture,
            place: "Mendoza",
            price: item.prince.amount,
          }}
        />
      )),
    [items]
  );

  return (
    <>
      {items && (
        <div className="list-result-card">
          <BasicLayout>
            <div className="list-result-card--internal">{itemsList}</div>
          </BasicLayout>
        </div>
      )}
    </>
  );
};

export default ListResultCard;
