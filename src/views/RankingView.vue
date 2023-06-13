<script setup lang="ts">
import PrincipalHeader from "../components/PrincipalHeader.vue";
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
      .then((res) => res.json())
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
        <li v-for="(url, index) in urls" :key="url.id">
          <span>{{ index + 1 }}</span>
          <span>{{ url.url }}</span>
          <span>Visits: {{ url.num_visits }}</span>
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
li {
  list-style-type: none;
  height: 30px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
span {
  padding: 0 5px;
  display: flex;
  align-items: center;
}
</style>
