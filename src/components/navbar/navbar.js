import React from "react";
import Logo from "../../assets/meli-logo.png";
import { Link } from "react-router-dom";
//Styles
import "./navbar.scss";
import { FaSearch } from "react-icons/fa";
//Api service;
import { getProductsApi } from "../../utils/api";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "", products: {}, loading: true, error: null };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Metodo para manejar los cambio de estado
   * del input asociado al navbar
   */
  handleChange = event => {
    this.setState({
      query: event.target.value
    });
  };

  /**
   * Metodo para manejar la petición al servidor
   * cuando se le hace click al botón de buscar
   */
  handleSubmit = event => {
    console.log("Espera mientra recibo la respuesta de tu peticion...");
    this.handlerPetition();
    event.preventDefault();
  };

  /**
   * Metodo para manejar la petición al servidor
   * cuando se le hace click al botón de enter
   */
  handleKeyDown = event => {
    if (event.key === "Enter") {
      console.log("Espera mientra recibo la respuesta de tu peticion...");
      this.handlerPetition();
    }
  };

  /**
   * Metodo que maneja la peticion al servidor
   * interactua con API service
   */
  handlerPetition = () => {
    this.setState({ loading: true, error: null });
    this.timeoutId = getProductsApi(this.state.query)
      .then(res => {
        this.setState({
          products: res.data,
          loading: false
        });
        this.props.onSelectProducts(res.data);
      })
      .catch(error => this.setState({ loading: false, error: error }));
  };

  /**
   * Ciclo de vida que se ejecuta cuando
   * se destruye el component
  */
  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  render() {
    return (
      <React.Fragment>
        <Link to="/">
          <div className="navbar">
            <div className="container-fluid">
              <img className="navbar__brand-logo" src={Logo} alt="Meli Logo" />
              <div className="searchBar input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nunca dejes de buscar"
                  name="Searchbar"
                  aria-describedby="basic-addon1"
                  value={this.state.query}
                  onKeyDown={this.handleKeyDown}
                  onChange={this.handleChange}
                ></input>
                <div className="input-group-prepend">
                  <button
                    onClick={this.handleSubmit}
                    className="input-group-text rounded-right"
                    id="basic-addon1"
                  >
                    <FaSearch />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </React.Fragment>
    );
  }
}

export default Navbar;
