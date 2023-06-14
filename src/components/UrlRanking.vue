<script setup lang="ts">
defineProps<{
  index: number;
  url: string;
  num_visits: string | number;
}>();
</script>

<template>
  <li>
    <span>{{ index + 1 }}</span>
    <span>{{ url }}</span>
    <span>Visits: {{ num_visits }}</span>
  </li>
</template>

<style scoped>
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
