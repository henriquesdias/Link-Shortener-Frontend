<script setup lang="ts">
import type { Component } from "vue";

import PrincipalHeader from "./PrincipalHeader.vue";
defineProps<{
  children: Component;
}>();
</script>

<template>
  <PrincipalHeader />
  <main>
    <component :is="children" />
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
</style>
