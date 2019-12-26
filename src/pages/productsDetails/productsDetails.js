import React from "react";
import "./productsDetails.scss";
//Components
import Navbar from "../../components/navbar/navbar";
import CardDetails from "../../components/cardDetails/cardDetails";
//Api
import { getProdDetailsApi } from "../../utils/api";

class ProductsDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ loading: true, error: null });
    this.timeoutId = getProdDetailsApi(this.props.match.params.id)
      .then(res => {
        console.log(res.data.item);
        this.setState({
          details: res.data.item,
          loading: false
        });
      })
      .catch(error => this.setState({ loading: false, error: error }));
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  render() {
    if (this.state.loading === true) {
      return (
        <div>
          <Navbar />
          <p>Cargando...</p>
        </div>
      );
    }
    return (
      <React.Fragment>
        <div className="details">
          <div className="details__header">
            <Navbar />
          </div>
          <div className="details__container">
            <CardDetails
              image={this.state.details.picture}
              title={this.state.details.title}
              price={this.state.details.price.amount}
              decimal={this.state.details.price.decimals}
              description={this.state.details.description}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductsDetails;
