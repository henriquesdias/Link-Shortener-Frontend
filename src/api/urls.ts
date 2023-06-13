import request from "./request";

export async function createShortUrl(url: string) {
  return request.post("http://localhost:4000/urls", { url });
}
export async function getTheMostUrlsVisited() {
  return request.get("http://localhost:4000/urls");
}
