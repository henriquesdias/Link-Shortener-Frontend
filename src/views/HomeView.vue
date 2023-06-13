<script setup lang="ts">
import PrincipalHeader from "@/components/PrincipalHeader.vue";
import FormsCreateURL from "@/components/FormsCreateURL.vue";
</script>

<template>
  <PrincipalHeader />
  <main>
    <FormsCreateURL />
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
