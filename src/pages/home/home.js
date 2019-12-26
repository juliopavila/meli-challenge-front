import React from "react";
import "./home.scss";
//Components
import Navbar from "../../components/navbar/navbar";
import Card from "../../components/card/card";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {
        items: []
      }
    };
  }

  /**
   * Metodo para manejar el estado de los productos
   * que se ejecuta con la info actualizada del componente
   * Navbar
   */
  handlerProducts = prod => {
    this.setState({ products: prod });
  };

  render() {
    return (
      <React.Fragment>
        <div className="home">
          <div className="home__navbar">
            <Navbar onSelectProducts={this.handlerProducts} />
          </div>
          <div className="home__card-container">
            {this.state.products.items.map(data => {
              return (
                <Card
                  key={data.id}
                  id={data.id}
                  image={data.picture}
                  price={data.price.amount}
                  title={data.title}
                  direction={data.address}
                  onclick="console.log('The link was clicked.'); return false"
                />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
