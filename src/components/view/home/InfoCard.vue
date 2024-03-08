<template>
  <div class="lg:order-2 order-0 p-2 grow w-full xl:basis-1/2  lg:basis-2/3  md:grow-0">
    <div class="w-full h-full flex md:flex-row flex-col">
      <div class="basis-3/4 order-1 md:order-0 py-4 pb-9 px-8 flex flex-col justify-between">
        <h3>Waxpeer online & status</h3>
        <Counter/>
      </div>
      <div class="basis-1/4 order-0 md:order-1">
        <Atom/>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import Atom from "@/components/view/home/Atom.vue";
import Counter from "@/components/view/home/Counter.vue";

</script>

<style scoped>
</style>
