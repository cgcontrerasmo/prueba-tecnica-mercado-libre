import BasicLayout from "components/templates/BasicLayout/BasicLayout";
import "./ResultDetail.scss";

const ResultDetail = () => {
  return (
    <div className="result-detail">
      <BasicLayout>
        <div className="result-detail--internal">
          <div>
            <img />
            <div>
              <span>Nuevo - 234 vendidos</span>
              <div>
                <h1>Deco Reverse Sombrero Oxford</h1>
                <h2>$ 1.890</h2>
                <button>Comprar</button>
              </div>
            </div>
          </div>
          <div>
            <h2>Descripción del producto</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              ipsum risus, aliquam sed enim ut, posuere pretium orci. Aenean
              viverra fringilla purus id malesuada. Fusce eget sem in orci porta
              laoreet et nec ante. Maecenas nec elit at lectus molestie interdum
              id a risus. Nunc tincidunt auctor blandit. Nullam eu lacus erat.
              Nam et ligula vitae libero viverra gravida. Nam mollis nulla vitae
              purus ultricies lacinia et quis ligula. Mauris euismod, orci non
              imperdiet bibendum, nunc nunc malesuada erat, vel tincidunt lacus
              diam a sapien. Integer imperdiet ullamcorper ligula in interdum.
              Proin at libero eu sapien cursus volutpat. Nullam non sapien
              mollis nulla molestie viverra. Integer pellentesque fermentum nisi
              vitae accumsan. Phasellus porta sed nisi semper scelerisque.
              Aliquam volutpat nisi vitae odio congue consectetur.
            </p>
          </div>
        </div>
      </BasicLayout>
    </div>
  );
};

export default ResultDetail;
