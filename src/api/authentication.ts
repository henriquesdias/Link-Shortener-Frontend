import request from "./request";

type SignIn = {
  email: string;
  password: string;
};

export async function signIn(body: SignIn) {
  return request.post("http://localhost:4000/sign-in", body);
}
