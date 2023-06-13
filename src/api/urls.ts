import request from "./request";

export async function createShortUrl(url: string) {
  const token = localStorage.getItem("token");
  return request.post("http://localhost:4000/urls", { url }, token);
}
export async function getTheMostUrlsVisited() {
  return request.get("http://localhost:4000/urls/ranking");
}
