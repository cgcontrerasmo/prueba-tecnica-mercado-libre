import BasicLayout from "components/templates/BasicLayout/BasicLayout";
import "./BreadCrumbs.scss";

const BreadCrumbs = () => {
  return (
    <div className="bread-crumbs">
      <BasicLayout>
        <div className="bread-crumbs--internal">
          <div className="bread-crumbs--container-breads">
            <span>
              Electronica, audio y videoElectronica, audio y videoElectronica
            </span>
            <span>iPod</span>
            <span>Reproductores</span>
            <span>!Pod touch</span>
            <span>32GB</span>
          </div>
        </div>
      </BasicLayout>
    </div>
  );
};

export default BreadCrumbs;
