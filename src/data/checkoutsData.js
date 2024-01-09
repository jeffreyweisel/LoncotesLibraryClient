const _apiUrl = "/api/checkouts";

export const getCheckouts = () => {
  return fetch(_apiUrl).then((r) => r.json());
};


export const getCheckout = (id) => {
  return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
};

export const createCheckout = (material) => {
  return fetch(_apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(material),
  }).then((res) => res.json());
};

// Return checkout
export const returnCheckout = (id) => {
  return fetch(`${_apiUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}), // send empty object 
  }).then((r) => r.json());
};

// Get overdue checkouts 
export const getOverdueCheckouts = () => {
    return fetch(`${_apiUrl}/overdue`).then((r) => r.json());
  };