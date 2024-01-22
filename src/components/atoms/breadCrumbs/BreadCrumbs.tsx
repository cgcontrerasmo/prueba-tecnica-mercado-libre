import "./BreadCrumbs.scss";
import BasicLayout from "components/templates/BasicLayout/BasicLayout";
import { PropsBreadCrumbs } from "types/breadCrumbs";

const BreadCrumbs = ({ filters }: PropsBreadCrumbs) => {
  return (
    <div className="bread-crumbs">
      <BasicLayout>
        <div className="bread-crumbs--internal">
          <div className="bread-crumbs--container-breads">
            {filters &&
              filters.map((filter, index) => {
                return <span key={`filter-${index}`}>{filter.name}</span>;
              })}
          </div>
        </div>
      </BasicLayout>
    </div>
  );
};

export default BreadCrumbs;
