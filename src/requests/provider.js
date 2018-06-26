import { BASE_URL } from "../config";

export default {
  all() {
    return fetch(`${BASE_URL}/providers`, {
      headers: { "Content-Type": "application/json" }
    }).then(response => response.json());
  },
  one(id) {
    return fetch(`${BASE_URL}/providers/${id}`, {
      headers: { "Content-Type": "application/json" }
    }).then(response => response.json());
  },
  create(params) {
    return fetch(`${BASE_URL}/providers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
      credentials: "include"
    }).then(response => response.json());
  },
  update(id, params) {
    return fetch(`${BASE_URL}/providers/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params)
    }).then(response => response.json());
  },
  delete(id) {
    return fetch(`${BASE_URL}/providers/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    }).then(response => response.json());
  }
};
