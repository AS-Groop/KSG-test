<template>
  <div class="w-full py-2 px-5 z-10 xl:px-64 shadow-[0_0_8px_rgba(0,0,0,0.25)] fixed top-0 l-0 r-0 flex justify-between items-center">
    <div class="text-2xl font-bold flex items-center dark:text-gray-50 transition-colors">
      TODO
    </div>
    <div class="flex items-center">
      <Button
          :class="isDark ? 'btn-light' :'btn-login-github'"
          class=" mr-1"
          @click="isToggle()">
        {{ isDark ? 'Light' :'Dark' }}
      </Button>
      <Button class="btn-success" @click="logout">
        {{ data?.username ||'A' }}
      </Button>
    </div>
  </div>
</template>
<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
import {useAuth, useHelpers} from "@/hooks";
const {logout, data} = useAuth()
const {isToggle, isDark} = useHelpers()
</script>