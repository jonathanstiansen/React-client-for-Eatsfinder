import { BASE_URL } from "../config";

export default {
  create(id, params) {
    return fetch(`${BASE_URL}/dishes/${id}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(params)
    }).then(response => response.json());
  },
  delete(id) {
    return fetch(`${BASE_URL}/reviews/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    }).then(response => response.json());
  }
};
