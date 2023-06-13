<script setup lang="ts">
import PrincipalHeader from "@/components/PrincipalHeader.vue";
import { getMyUrls, deleteUrl } from "../api/urls";
import type { URL } from "../protocols";

function deleteOneUrl(id: number) {
  deleteUrl(id)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
}

function copyClipboard(text: string) {
  navigator.clipboard.writeText(`http:localhost:4000/${text}`);
}
</script>

<script lang="ts">
export default {
  data() {
    return {
      urls: [] as URL[]
    };
  },
  mounted() {
    getMyUrls()
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw Error;
      })
      .then((data) => (this.urls = data))
      .catch((error) => console.log(error));
  }
};
</script>

<template>
  <PrincipalHeader />
  <main>
    <div>
      <h1>Your URLs</h1>
      <ul>
        <li v-for="url in urls" :key="url.id">
          <span>{{ url.url }}</span>
          <span v-on:click="copyClipboard(url.shortened_url)">Click Here</span>
          <span v-on:click="deleteOneUrl(url.id)">Exclude</span>
        </li>
      </ul>
    </div>
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
div {
  width: 98%;
  max-width: 650px;
}
h1 {
  text-align: center;
}
ul {
  border: 1px solid black;
  border-radius: 10px;
  height: 400px;
  overflow-y: auto;
  margin: 0 auto;
  max-width: 400px;
}
li {
  list-style-type: none;
  height: 30px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
span {
  padding: 0 5px;
  display: flex;
  align-items: center;
}
li span:nth-child(2) {
  background-color: green;
  cursor: pointer;
}
li span:last-child {
  background-color: red;
  cursor: pointer;
}
</style>
