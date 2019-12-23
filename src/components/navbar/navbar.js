import React from "react";
import Logo from "../../assets/meli-logo.png";
//Styles
import "./navbar.scss";
//Components
import Searchbar from "../searchBar/searchBar";
//import Searchbar from "../../components/searchBar/searchBar";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="container-fluid">
          <img className="navbar__brand-logo" src={Logo} alt="Meli Logo" />
          <Searchbar />
        </div>
      </div>
    );
  }
}

export default Navbar;
