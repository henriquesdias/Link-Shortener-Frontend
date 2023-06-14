import request from "./request";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function createShortUrl(url: string) {
  const token = localStorage.getItem("token");
  return request.post(`${BASE_URL}urls`, { url }, token);
}
export async function getTheMostUrlsVisited() {
  return request.get(`${BASE_URL}urls/ranking`);
}
export async function getMyUrls() {
  const token = localStorage.getItem("token");
  return request.get(`${BASE_URL}urls/my-urls`, token);
}
export async function deleteUrl(id: number) {
  const token = localStorage.getItem("token");
  return request.deleteData(`${BASE_URL}urls/${id}`, token);
}
