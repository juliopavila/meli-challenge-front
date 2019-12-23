import React from "react";
import "./home.scss";
//Components
import Navbar from "../../components/navbar/navbar";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home__navbar">
          <Navbar />
        </div>
      </div>
    );
  }
}

export default Home;
