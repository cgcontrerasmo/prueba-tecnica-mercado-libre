import { ResultCars } from "types/resultCard/resultCard";
import "./ResultCard.scss";
import logo from "assets/Logo_ML.png";

const ResultCard = ({ info }: ResultCars) => {
  return (
    <div className="result-card">
      <img alt={`${info.description}`} role="link" src={logo} />
      <div>
        <div>
          <h2 tabIndex={0} role="link">
            $ 1.980
          </h2>
          <span>Capital Fedaral</span>
        </div>
        <p>Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!</p>
      </div>
    </div>
  );
};

export default ResultCard;
