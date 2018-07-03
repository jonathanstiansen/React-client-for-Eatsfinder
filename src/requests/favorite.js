import { BASE_URL } from "../config";

export default {
  create(id) {
    console.log(id);
    return fetch(`${BASE_URL}/dishes/${id}/favorites`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    }).then(response => response.json());
  },
  delete(id) {
    return fetch(`${BASE_URL}/favorites/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    }).then(response => response.json());
  }
};
