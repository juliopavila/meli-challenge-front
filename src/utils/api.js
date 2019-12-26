import http from "axios";
const baseUrl = "https://meli-backend.herokuapp.com/api/items";

export function getProductsApi(query) {
  return http.get(`${baseUrl}?query=${query}`);
}

export function getProdDetailsApi(id) {
  return http.get(`${baseUrl}/${id}`);
}
