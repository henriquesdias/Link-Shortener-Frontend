<script setup lang="ts">
import { ref } from "vue";

import { createShortUrl } from "../api/urls";

const url = ref("");
const shortened_url = ref("");
const isError = ref(false);
async function submit(e: Event) {
  e.preventDefault();
  isError.value = false;
  createShortUrl(url.value)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw Error;
    })
    .then((data) => (shortened_url.value = `http://localhost:4000/${data.shortened_url}`))
    .catch(() => {
      isError.value = true;
    });
}
function copyToClipboard() {
  navigator.clipboard.writeText(shortened_url.value);
}
</script>

<template>
  <form v-on:submit.prevent="submit">
    <h1>Shorten your link</h1>
    <span v-if="isError" class="error">Must be a valid URL</span>
    <input type="text" placeholder="Ex: https://www.freecodecamp.org/" v-model="url" required />
    <button type="submit">Get your link</button>
    <div class="short-link">
      <span v-on:click="copyToClipboard">Click here</span>
      <span>{{ shortened_url.valueOf() }}</span>
    </div>
  </form>
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
.short-link {
  display: flex;
  align-items: center;
  height: 30px;
}
.short-link span:first-child {
  background-color: rgb(65, 228, 65);
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px 0 0 5px;
  width: 20%;
  font-size: 15px;
}
.short-link span:last-child {
  display: flex;
  align-items: center;
  height: 30px;
  padding-left: 5px;
  border: 1px solid black;
  border-radius: 0 5px 5px 0;
  width: 80%;
}
.hide {
  display: none;
}
</style>
