import ResultCard from "components/atoms/resultCard/ResultCard";
import "./ListResultCard.scss";
import BasicLayout from "components/templates/BasicLayout/BasicLayout";

const ListResultCard = () => {
  return (
    <div className="list-result-card">
      <BasicLayout>
        <div className="list-result-card--internal">
          {[...Array(6)].map((el, index) => (
            <ResultCard
              key={`result-card${index}`}
              info={{
                description: "kjsdfhsadf",
                image: "sjkfdhkjas",
                place: "Mendoza",
                price: "1980",
              }}
            />
          ))}
        </div>
      </BasicLayout>
    </div>
  );
};

export default ListResultCard;
