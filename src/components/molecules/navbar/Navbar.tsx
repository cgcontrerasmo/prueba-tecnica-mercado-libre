import "./Navbar.scss";
import SearchBar from "components/atoms/searchBar/SearchBar";
import logo from "assets/Logo_ML.png";
import BasicLayout from "components/templates/BasicLayout/BasicLayout";

const Navbar = () => {
  return (
    <div className="navbar">
      <BasicLayout>
        <div className="navbar__image-search-bar">
          <img alt="logo-mercado-libre" src={logo} />
          <SearchBar />
        </div>
      </BasicLayout>
    </div>
  );
};

export default Navbar;
