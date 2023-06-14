<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import PrincipalPageWrapper from "@/components/PrincipalPageWrapper.vue";
import { signUp } from "../api/authentication";

const router = useRouter();
const email = ref("");
const password = ref("");
const isError = ref(false);

async function submit() {
  isError.value = false;
  signUp({ email: email.value, password: password.value })
    .then((res) => {
      if (res.ok) {
        router.push("/sign-in");
        return;
      }
      throw Error;
    })
    .catch(() => {
      isError.value = true;
    });
}
</script>

<template>
  <PrincipalPageWrapper>
    <form @submit.prevent="submit">
      <h1>Sign Up</h1>
      <span v-if="isError" class="error">This email already in use</span>
      <input type="text" placeholder="Your e-mail" v-model="email" required />
      <input type="password" placeholder="Your password" v-model="password" required />
      <button>Sign Up</button>
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
