async function get(URL: string) {
  return fetch(URL, {
    method: "GET"
  });
}
async function post(URL: string, body: any) {
  return fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
}
const request = {
  get,
  post
};

export default request;
