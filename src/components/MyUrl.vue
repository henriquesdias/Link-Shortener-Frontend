<script setup lang="ts">
import { deleteUrl } from "@/api/urls";

defineProps<{
  url: string;
  shortened_url: string;
  id: number;
}>();
function deleteOneUrl(id: number) {
  deleteUrl(id)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
}
function copyClipboard(text: string) {
  navigator.clipboard.writeText(`${import.meta.env.VITE_BASE_URL}${text}`);
}
</script>

<template>
  <li>
    <span>{{ url.startsWith("https://") ? url.split("https://")[1] : url }}</span>
    <span @click="copyClipboard(shortened_url)">Copy Here</span>
    <span @click="deleteOneUrl(id)">Exclude</span>
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
li span:nth-child(2) {
  background-color: green;
  cursor: pointer;
}
li span:last-child {
  background-color: red;
  cursor: pointer;
}
@media (max-width: 390px) {
  span {
    font-size: 14px;
  }
}
</style>
