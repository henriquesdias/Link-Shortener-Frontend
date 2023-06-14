import request from "./request";

type AuthBody = {
  email: string;
  password: string;
};

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function signIn(body: AuthBody) {
  return request.post(`${BASE_URL}sign-in`, body);
}
export async function signUp(body: AuthBody) {
  return request.post(`${BASE_URL}sign-up`, body);
}
