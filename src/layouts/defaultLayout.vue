<template>
  <div class="w-screen h-screen bg-amber-50 dark:bg-[#1a1a1a]">
    <Header/>
    <div class="fixed top-0 w-full items-start h-full px-4 xl:px-10 pt-[7rem] pb-4">
<!--      <Sidebar/>-->
      <RouterView/>
    </div>
  </div>
</template>
<script setup lang="ts">
import Header from "@/components/global/Header.vue";
// import Sidebar from "@/components/global/Sidebar.vue";
</script>