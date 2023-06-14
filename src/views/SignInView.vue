<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import PrincipalPageWrapper from "@/components/PrincipalPageWrapper.vue";
import { signIn } from "../api/authentication";

const router = useRouter();

const email = ref("");
const password = ref("");
const isError = ref(false);

async function submit() {
  isError.value = false;
  signIn({ email: email.value, password: password.value })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw Error;
    })
    .then((data) => {
      localStorage.setItem("token", data.token);
      router.push("/");
    })
    .catch(() => {
      isError.value = true;
    });
}
</script>

<template>
  <PrincipalPageWrapper>
    <form @submit.prevent="submit">
      <h1>Sign In</h1>
      <span v-if="isError" class="error">The credetials are wrong</span>
      <input type="text" placeholder="Your e-mail" v-model="email" required />
      <input type="password" placeholder="Your password" v-model="password" required />
      <button>Sign In</button>
    </form>
  </PrincipalPageWrapper>
</template>

<style scoped>
form {
  width: 95%;
  max-width: 350px;
  height: 380px;
  background-color: rgba(233, 225, 225, 0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px 5px;
}
h1 {
  text-align: center;
  margin-bottom: 50px;
}
input {
  height: 30px;
  outline: none;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
  padding-left: 10px;
}
button {
  height: 30px;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
}
.error {
  color: red;
}
</style>
