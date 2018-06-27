import { BASE_URL } from "../config";

export default {
  one(id) {
    return fetch(`${BASE_URL}/users/${id}`, {
      headers: { "Content-Type": "application/json" }
    }).then(response => response.json());
  },
  create(params) {
    return fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params)
    }).then(response => response.json());
  },
  update(id, params) {
    return fetch(`${BASE_URL}/users/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params)
    }).then(response => response.json());
  },
  current() {
    return fetch(`${BASE_URL}/users/current`, {
      credentials: "include"
    }).then(response => response.json());
  }
};
