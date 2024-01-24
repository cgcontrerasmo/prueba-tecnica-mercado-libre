import { BasicLayoutProps } from "types/basicLayout";
import "./BasicLayout.scss";

const BasicLayout = ({ children }: BasicLayoutProps) => {
  return <div className="basic-layout">{children}</div>;
};

export default BasicLayout;
