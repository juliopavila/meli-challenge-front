/* eslint-disable jsx-a11y/alt-text */
import React from "react";
//Styles
import "../card/card.scss";

class Card extends React.Component {
  render() {
    return (
      <div className="card card__container">
        <div className="row">
          <div className="col-2">
            <img src={this.props.image} className="rounded" />
          </div>
          <div className="col-7">
            <div className="card__body">
              <h5 className="card-subtitle mb-2 text-muted">
                $ {this.props.price}
              </h5>
              <p className="card__text">{this.props.title}</p>
            </div>
          </div>
          <div className="col-3">
            <h6 className="card__title-h6">{this.props.direction}</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
