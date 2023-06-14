<script setup lang="ts">
import UrlRanking from "@/components/UrlRanking.vue";
import { getTheMostUrlsVisited } from "@/api/urls";
import PrincipalPageWrapper from "@/components/PrincipalPageWrapper.vue";
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
  <PrincipalPageWrapper>
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
  </PrincipalPageWrapper>
</template>

<style scoped>
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
