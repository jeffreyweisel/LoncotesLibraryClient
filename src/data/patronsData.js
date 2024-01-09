const _apiUrl = "/api/patrons";

// Get patrons
export const getPatrons = () => {
    return fetch(_apiUrl).then((r) => r.json());
  };

// Get a single patron
export const getPatron = (id) => {
    return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
  };

// Update a patron's details
export const updatePatron = (patron) => {
  return fetch(`${_apiUrl}/${patron.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(patron),
  }).then((r) => r.json());
};

// Deactivate a patron
export const deactivatePatron = (id) => {
  return fetch(`${_apiUrl}/deactivate/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}), // send empty object 
  }).then((r) => r.json());
};

// Activate a patron
export const activatePatron = (id) => {
  return fetch(`${_apiUrl}/activate/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}), // send empty object 
  }).then((r) => r.json());
};