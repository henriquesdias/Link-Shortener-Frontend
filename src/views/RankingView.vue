<script setup lang="ts">
import PrincipalHeader from "../components/PrincipalHeader.vue";
import UrlRanking from "@/components/UrlRanking.vue";
import { getTheMostUrlsVisited } from "@/api/urls";
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
    getTheMostUrlsVisited()
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
      <h1>The most 100 URLs visited</h1>
      <ul>
        <UrlRanking
          v-for="(url, index) in urls"
          :key="url.id"
          :index="index"
          :url="url.url"
          :num_visits="url.num_visits"
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
h1 {
  text-align: center;
}
ul {
  border: 1px solid black;
  border-radius: 10px;
  height: 400px;
  overflow-y: auto;
  width: 98%;
  margin: 0 auto;
}
</style>
