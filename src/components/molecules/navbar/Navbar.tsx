import "./Navbar.scss";
import BasicLayout from "components/templates/BasicLayout/BasicLayout";
import logo from "assets/Logo_ML.png";
import SearchBar from "components/atoms/searchBar/SearchBar";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="navbar">
      <BasicLayout>
        <div className="navbar__image-search-bar">
          <img
            alt="logo-mercado-libre"
            src={logo}
            onClick={handleGoHome}
            role="link"
          />
          <SearchBar />
        </div>
      </BasicLayout>
    </div>
  );
};

export default Navbar;
