import React from "react";
import "./home.scss";
//Components
import Navbar from "../../components/navbar/navbar";
import Card from "../../components/card/card";

class Home extends React.Component {
  state = {
    products: {
      author: {},
      items: []
    }
  };

  handlerProducts = prod => {
    this.setState({ products: prod });
    console.log(this.state.products);
  };

  render() {
    return (
      <div className="home">
        <div className="home__navbar">
          <Navbar onSelectProducts={this.handlerProducts} />
          <div className="home__card-container">
            {this.state.products.items.map(data => {
              return (
                <Card
                  key={data.id}
                  image={data.picture}
                  price={data.price.amount}
                  title={data.title}
                  direction={data.address}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
