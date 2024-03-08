<template>
  <div
      class="card dark:bg-[#212121] flex
      shadow-[0_0_6px_rgba(0,0,0,0.25)] hover:cursor-pointer h-full">
    <div class="w-8 shrink-0 h-8 mr-3 overflow-hidden">
      <img :src="`${todo.logo}.png`" alt="" class="w-full h-full object-cover">
    </div>
    <div class="w-full">
      <h3 class="text-xl">
        {{todo.title}}
      </h3>
      <p class="mt-4">
        {{ todo.text }}
      </p>
      <div class="flex w-full justify-end gap-1 mt-7 items-end">
        <div class="font-normal text-2xl leading-[48px]"
        :class="todo.class || 'text_card'">{{ todo.value }}</div>
        <div class="ml-auto" v-if="todo?.img">
          <img v-if="todo.img==='social'" src="@/assets/images/social.png" alt="" class="h-10 w-auto drop-shadow-[0_0_2px_rgba(0,0,0,1)]">
          <img v-else-if="todo.img==='diagram'" src="@/assets/images/diagram.png" alt="" class="h-14 w-auto drop-shadow-[0_0_4px_rgba(0,0,0,1)]">
          <span v-else class="font-normal text-[20px] leading-8 text-[#6d6d71]">{{todo.img}}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { type PropType} from 'vue'
import type { Card } from '@/types'

const props = defineProps({
  todo: {
    type: Object as PropType<Card>,
    default: null
  }
})


</script>

<style scoped>

</style>
