import http from "axios";
const baseUrl = "https://meli-backend.herokuapp.com/api/items";
const localUrl = "http://localhost:3100/";

export function getProductsApi(query) {
  return http.get(`${baseUrl}?query=${query}` || `${localUrl}?query=${query}`);
}

export function getProdDetailsApi(id) {
  return http.get(`${baseUrl}/${id}` || `${localUrl}/${id}`);
}
