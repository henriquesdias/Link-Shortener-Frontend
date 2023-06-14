type Headers = {
  "Content-Type"?: string;
  Authorization?: string;
};

async function get(URL: string, token?: string | null) {
  const headers: Headers = {
    "Content-Type": "application/json"
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  return fetch(URL, {
    method: "GET",
    headers
  });
}
async function post(URL: string, body: any, token?: string | null) {
  const headers: Headers = {
    "Content-Type": "application/json"
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  return fetch(URL, {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  });
}
async function deleteData(URL: string, token?: string | null) {
  const headers: Headers = {};
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  return fetch(URL, {
    method: "DELETE",
    headers
  });
}
const request = {
  get,
  post,
  deleteData
};

export default request;
