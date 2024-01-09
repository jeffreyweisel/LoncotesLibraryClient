const _apiUrl = "/api/materials";

export const getMaterials = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

//export a function here that gets a ticket by id
export const getMaterial = (id) => {
  return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
};

export const createMaterial = (material) => {
  return fetch(_apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(material),
  }).then((res) => res.json());
};

// Remove material from circulation
export const removeMaterial = (id) => {
  return fetch(`${_apiUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}), // send empty object 
  }).then((r) => r.json());
};

// Get available materials 
export const getAvaialbleMaterials = () => {
  return fetch(`${_apiUrl}/available`).then((r) => r.json());
};