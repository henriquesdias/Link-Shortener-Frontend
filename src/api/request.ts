type Headers = {
  "Content-Type": string;
  Authorization?: string;
};

async function get(URL: string) {
  return fetch(URL, {
    method: "GET"
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
const request = {
  get,
  post
};

export default request;
