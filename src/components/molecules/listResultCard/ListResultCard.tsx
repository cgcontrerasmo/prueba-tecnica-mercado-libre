import ResultCard from "components/atoms/resultCard/ResultCard";
import "./ListResultCard.scss";
import BasicLayout from "components/templates/BasicLayout/BasicLayout";
import { listResultCardProps } from "types/listResultCard";
import Loading from "components/atoms/loading/Loading";

const ListResultCard = ({ items }: listResultCardProps) => {
  console.log("items", items);
  return (
    <>
      {items ? (
        <div className="list-result-card">
          <BasicLayout>
            <div className="list-result-card--internal">
              {items.map((item, index) => (
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
              ))}
            </div>
          </BasicLayout>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ListResultCard;
