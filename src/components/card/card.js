/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
//Styles
import "../card/card.scss";
import NumberFormat from "react-number-format";

class Card extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Link to={'/details/'+this.props.id} className="card card__container">
          <div className="row">
            <div className="col-sm-12 col-md-2">
              <img src={this.props.image} className="rounded" />
            </div>
            <div className="col-sm-12 col-md-7">
              <div className="card__body">
                <h5 className="card-subtitle mb-2 text-muted">
                  <NumberFormat
                    value={this.props.price}
                    displayType={"text"}
                    thousandSeparator="."
                    decimalSeparator=","
                    prefix={"$"}
                  />
                </h5>
                <p className="card__text">{this.props.title}</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <h6 className="card__title-h6">{this.props.direction}</h6>
            </div>
          </div>
        </Link>
      </React.Fragment>
    );
  }
}

export default Card;
