import { BASE_URL } from "../config";

export default {
  create(params) {
    return fetch(`${BASE_URL}/session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(params)
    }).then(response => response.json());
  },
  destroy() {
    return fetch(`${BASE_URL}/session`, {
      method: "DELETE",
      credentials: "include"
    });
  }
};
