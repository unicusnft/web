import {BASE_URL} from "./Utils";

export const makeRequest = async (request) => {
  let jsonResponse;
  const response = await request();
  if (response.status === 200 || response.status === 201) {
    jsonResponse = await response.json();
  } else {
    throw new Error("Error al procesar la operacion");
  }
  return jsonResponse;
};

export const get = (url, config) => {
  return makeRequest(() =>
    fetch(`${BASE_URL}/${url}`, {...headers(config), method: "GET"})
  );
};

export const del = (url, config) => {
  return makeRequest(() =>
    fetch(`${BASE_URL}/${url}`, {...headers(config), method: "DELETE"})
  );
};

export const post = (url, data, config) =>
  makeRequest(() =>
    fetch(`${BASE_URL}/${url}`, {
      ...headers(config),
      method: "POST",
      body: JSON.stringify(data),
    })
  );

export const put = (url, data, config) =>
  makeRequest(() =>
    fetch(`${BASE_URL}/${url}`, {
      ...headers(config),
      method: "PUT",
      body: JSON.stringify(data),
    })
  );

export const patch = (url, data, config) => {
  return makeRequest(() =>
    fetch(`${BASE_URL}/${url}`, {
      ...headers(config),
      method: "PATCH",
      body: JSON.stringify(data),
    })
  );
};

export const headers = (config) => {
  return {
    headers: {
      "Content-type": "application/json",
      ...config,
    },
  };
};
