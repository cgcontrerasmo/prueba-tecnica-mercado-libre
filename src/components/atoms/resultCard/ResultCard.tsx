import "./ResultCard.scss";
import Icon from "../icon/Icon";
import { ACTIONS } from "context/EventContext";
import { formatePrice } from "utilities/price";
import { ResultCars } from "types/resultCard";
import { useEventEmitter } from "hooks/useEventEmitter";
import { useNavigate } from "react-router-dom";

const ResultCard = ({ info }: ResultCars) => {
  const navigate = useNavigate();

  const { emitEvent } = useEventEmitter();

  const handleGoDetail = () => {
    navigate(`/items/${info.id}`);
    emitEvent(ACTIONS.LOADING_EVENT, true);
  };

  return (
    <div className="result-card">
      <img
        alt={`${info.description}`}
        role="link"
        src={info.image}
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
              {formatePrice(info.price)}
            </h2>
            <Icon name="Shipping" size={25} />
          </div>
          <span aria-label="Ubicación">Capital Fedaral</span>
        </div>
        <p>{info.description}</p>
      </div>
    </div>
  );
};

export default ResultCard;
