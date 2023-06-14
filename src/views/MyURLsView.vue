<script setup lang="ts">
import PrincipalHeader from "@/components/PrincipalHeader.vue";
import MyUrl from "@/components/MyUrl.vue";
import { getMyUrls } from "../api/urls";
import type { URL } from "../protocols";
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
        <MyUrl
          v-for="url in urls"
          :key="url.id"
          :url="url.url"
          :shortened_url="url.shortened_url"
          :id="url.id"
        />
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
</style>
