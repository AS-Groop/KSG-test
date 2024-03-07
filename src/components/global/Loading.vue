<template>
  <div v-if="loaderStore.getLoader" class="flex justify-center items-center bg-black bg-opacity-25 z-30 fixed w-full h-full dark:bg-white dark:bg-opacity-25">
    <span class="inline-block w-12 h-12 rounded-full border-4 border-x-transparent animate-spin border-y-amber-50 dark:border-y-gray-800"></span>
  </div>
</template>
<script lang="ts" setup>
import {useLoaderStore} from "@/stores";
const loaderStore = useLoaderStore();
</script>