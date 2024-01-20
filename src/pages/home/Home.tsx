import Navbar from "components/molecules/navbar/Navbar";
import "./Home.scss";
import BreadCrumbs from "components/atoms/breadCrumbs/BreadCrumbs";
import ListResultCard from "components/molecules/listResultCard/ListResultCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      <BreadCrumbs />
      <ListResultCard />
    </div>
  );
};

export default Home;
