import request from "./request";

export async function createShortUrl(url: string) {
  return request.post("http://localhost:4000/urls", { url });
}
