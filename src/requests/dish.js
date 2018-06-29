import { BASE_URL } from "../config";
//localhost:3000/v1/providers/134/dishes

export default {
  all(params = "") {
    return fetch(`${BASE_URL}/dishes${params}`, {
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    }).then(response => response.json());
  },
  one(id) {
    return fetch(`${BASE_URL}/dishes/${id}`, {
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    }).then(response => response.json());
  },
  create(id, params) {
    return fetch(`${BASE_URL}/providers/${id}/dishes`, {
      method: "POST",
      enctype: "multipart/form-data",
      body: params,
      credentials: "include"
    }).then(response => response.json());
  },
  update(id, params) {
    return fetch(`${BASE_URL}/dishes/${id}`, {
      method: "POST",
      enctype: "multipart/form-data",
      body: params,
      credentials: "include"
    }).then(response => response.json());
  },
  delete(id) {
    return fetch(`${BASE_URL}/dishes/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    }).then(response => response.json());
  }
};
