import { ResultCars } from "types/resultCard/resultCard";
import "./ResultCard.scss";
import logo from "assets/Logo_ML.png";
import Icon from "../icon/Icon";
import { useNavigate } from "react-router-dom";

const ResultCard = ({ info }: ResultCars) => {
  const navigate = useNavigate();

  const handleGoDetail = () => {
    navigate("/Detalle");
  };

  return (
    <div className="result-card">
      <img
        alt={`${info.description}`}
        role="link"
        src={logo}
        className="result-card__image"
        onClick={handleGoDetail}
      />
      <div>
        <div>
          <div className="result-card__container-title-icon">
            <h2
              tabIndex={0}
              role="link"
              aria-label="Precio"
              onClick={handleGoDetail}
            >
              $ 1.980
            </h2>
            <Icon name="Shipping" size={25} />
          </div>
          <span aria-label="Ubicación">Capital Fedaral</span>
        </div>
        <p>Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!</p>
      </div>
    </div>
  );
};

export default ResultCard;
