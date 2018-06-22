import { BASE_URL } from "../config";
//localhost:3000/v1/providers/134/dishes

http: export default {
  all() {
    return fetch(`${BASE_URL}/dishes`, {
      headers: { "Content-Type": "application/json" }
    }).then(response => response.json());
  },
  one(id) {
    return fetch(`${BASE_URL}/dishes/${id}`, {
      headers: { "Content-Type": "application/json" }
    }).then(response => response.json());
  },
  create(id, params) {
    return fetch(`${BASE_URL}/providers/${id}/dishes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params)
    }).then(response => response.json());
  },
  update(id, params) {
    return fetch(`${BASE_URL}/dishes/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params)
    }).then(response => response.json());
  },
  delete(id) {
    return fetch(`${BASE_URL}/dishes/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    }).then(response => response.json());
  }
};
