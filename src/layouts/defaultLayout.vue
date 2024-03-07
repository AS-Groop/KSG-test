<template>
  <div class="w-screen h-screen bg-amber-50 dark:bg-gray-800">
    <Header/>
    <div class="fixed top-0 w-full items-start h-full px-4 xl:px-64 pt-[4.5rem] pb-4">
<!--      <Sidebar/>-->
      <RouterView/>
    </div>
  </div>
</template>
<script setup lang="ts">
import Header from "@/components/global/Header.vue";
// import Sidebar from "@/components/global/Sidebar.vue";
</script>