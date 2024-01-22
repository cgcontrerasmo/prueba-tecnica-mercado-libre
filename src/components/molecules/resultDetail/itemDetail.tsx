import "./itemDetail.scss";
import BasicLayout from "components/templates/BasicLayout/BasicLayout";
import { formatePrice } from "utilities/price";
import { ItemDetailProps } from "types/detail";

const ResultDetail = ({ item }: ItemDetailProps) => {
  return (
    <div className="result-detail">
      <BasicLayout>
        <div className="result-detail--internal">
          <div>
            <img alt={item?.title} src={item?.picture} />
            <div>
              <span>
                {item?.condition === "new" ? "Nuevo" : "Usado"}
                {item?.sold_quantity ? ` - ${item.sold_quantity} vendidos` : ""}
              </span>
              <div>
                <h1>{item?.title}</h1>
                <h2>{formatePrice(item?.price.amount)}</h2>
                <button>Comprar</button>
              </div>
            </div>
          </div>
          <div>
            <h2>Descripción del producto</h2>
            <p>{item?.description}</p>
          </div>
        </div>
      </BasicLayout>
    </div>
  );
};

export default ResultDetail;
