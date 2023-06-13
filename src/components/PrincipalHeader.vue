<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref } from "vue";
const token = ref(localStorage.getItem("token"));
function signOut(){
  localStorage.removeItem("token");
  token.value = null;
}

</script>

<template>
  <header>
    <span>
      <RouterLink to="/ranking" class="custom-link">Top 100 Ranking</RouterLink>
    </span>
    <span>
      <RouterLink to="/" class="custom-link">Link Shortener</RouterLink>
    </span>
    <div>
      <span v-if="token === null">
        <RouterLink to="/sign-in" class="custom-link">Sign In / </RouterLink>
      </span>
      <span v-if="token === null">
        <RouterLink to="/sign-up" class="custom-link"> Sign Up</RouterLink>
      </span>
      <span v-on:click="signOut" v-if="token !== null">
        Sign out
      </span>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 50px;
}
.custom-link {
  text-decoration: none;
  color: inherit;
}
span:hover {
  opacity: 0.5;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;
}
</style>
