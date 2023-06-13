import request from "./request";

type AuthBody = {
  email: string;
  password: string;
};

export async function signIn(body: AuthBody) {
  return request.post("http://localhost:4000/sign-in", body);
}
export async function signUp(body: AuthBody) {
  return request.post("http://localhost:4000/sign-up", body);
}
