<template>
  <transition>
    <div @click="confirm(false)" v-if="data?.title" class="flex fixed top-0 right-0 bottom-0 left-0 bg-black dark:bg-white dark:bg-opacity-20 bg-opacity-20 z-30 items-center justify-center">
      <div class="p-5 bg-amber-50 dark:bg-gray-800 m-2 w-full max-w-md rounded-2xl" @click.stop>
        <p class="text-xl font-bold mb-2" :class="{'dark:text-orange-400 text-orange-400':!data.isConfirm}">{{data.title}}</p>
        <p class="text-lg" :class="{'dark:text-red-500 text-red-500':!data.isConfirm}"> {{data.text}} </p>
        <div class="flex w-full justify-end gap-1 mt-2">
          <Button v-if="data.isConfirm" @click="confirm(false)" class="btn-error">No</Button>
          <Button @click="confirm(true)" class="btn-success">Ok</Button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
import {useDialog} from "@/hooks"
const {confirm, data} = useDialog()

</script>

<style>

</style>