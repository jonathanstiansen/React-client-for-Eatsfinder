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
      enctype: "multipart/form-data",
      body: params,
      credentials: "include"
    }).then(response => response.json());
  },
  update(id, params) {
    return fetch(`${BASE_URL}/providers/${id}`, {
      method: "PATCH",
      enctype: "multipart/form-data",
      body: params,
      credentials: "include"
    }).then(response => response.json());
  },
  delete(id) {
    return fetch(`${BASE_URL}/providers/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    }).then(response => response.json());
  }
};

// const form = document.querySelector("#my_form");
// const image_upload = document.querySelector("#image_upload");
// const results = document.querySelector("#results");

// form.addEventListener("submit", e => {
//   /* preventDefault, so that the page doesn't refresh */
//   e.preventDefault();
//   /* you can fill the formData object automatically with all the data from the form */
//   const formData = new FormData(form);
//   /* or you can can instantiate an empty FormData object and then fill it using append(). The three arguments to append are the key (equivalent to the name field on an input), the file itself, and an optional third argument for the filename. */
//   const formData2 = new FormData();
//   formData2.append(
//     "image_file",
//     image_upload.files[0],
//     image_upload.files[0].name
//   );
//   /* You can iterate through the FormData object to view its data (this is equivalent to using the .entries() method.) */
//   for (const item of formData2) {
//     results.innerHTML = `
//       <p><strong>name:</strong> ${item[0]}</p>
//       <p><strong>filename:</strong> ${item[1].name}</p>
//       <p><strong>size:</strong> ${item[1].size}</p>
//       <p><strong>type:</strong> ${item[1].type}</p>
//     `;
//   }
//   /* once you've confirmed that the FormData object has all the proper data, send a fetch request. This particular request will go nowhere since I never defined the API_ROOT variable */
//   fetch(`${API_ROOT}/uploads`, {
//     method: "POST",
//     body: formData
//   });
// });
