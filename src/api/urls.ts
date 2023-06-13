import request from "./request";

export async function createShortUrl(url: string) {
  const token = localStorage.getItem("token");
  return request.post("http://localhost:4000/urls", { url }, token);
}
export async function getTheMostUrlsVisited() {
  return request.get("http://localhost:4000/urls/ranking");
}
export async function getMyUrls() {
  const token = localStorage.getItem("token");
  return request.get("http://localhost:4000/urls/my-urls", token);
}
export async function deleteUrl(id: number) {
  const token = localStorage.getItem("token");
  return request.deleteData(`http://localhost:4000/urls/${id}`, token);
}
