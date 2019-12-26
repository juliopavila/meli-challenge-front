/* eslint-disable jsx-a11y/alt-text */
import React from "react";
//Styles
import "./cardDetails.scss";

import NumberFormat from "react-number-format";

class CardDetails extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="card card__details">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <img src={this.props.image} className="img-fluid" />
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="card__details-body">
                <h5>{this.props.title}</h5>
                <h2>
                  {" "}
                  <NumberFormat
                    value={this.props.price}
                    displayType={"text"}
                    thousandSeparator="."
                    decimalSeparator=","
                    prefix={"$"}
                  />
                </h2>
                <button type="button" className="btn btn-primary">
                  Comprar
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <h6 className="card__details-h6">Descripción del producto</h6>
          </div>
          <div className="row">
            <p className="card__details-p">{this.props.description}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CardDetails;
