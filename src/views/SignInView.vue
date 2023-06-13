<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  import PrincipalHeader from '@/components/PrincipalHeader.vue';
  import { signIn } from "../api/authentication"

    const router = useRouter();

  const email = ref("");
  const password = ref("");

  async function submit(e: Event){
    e.preventDefault()
    signIn({email: email.value, password: password.value})
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("token", data.token);
        router.push("/");
      })
      .catch(error => console.log(error));
  }
</script>

<template>
  <PrincipalHeader />
  <main>
    <form v-on:submit.prevent="submit">
      <h1>Sign In</h1>
      <input type="text" placeholder="Your e-mail" v-model="email" required>
      <input type="text" placeholder="Your password" v-model="password" required>
      <button>Sign In</button>
    </form>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 50px);
  background: linear-gradient(
    42deg,
    rgba(0, 0, 0, 0.7651435574229692) 0%,
    rgba(84, 111, 196, 1) 99%
  );
}
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
</style>