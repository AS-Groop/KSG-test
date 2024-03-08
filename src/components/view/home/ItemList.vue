<template>
  <div class="mt-1 overflow-y-auto h-full">
    <div class="flex flex-wrap w-full">
      <template v-for="(card, i) in cards" :key="card.key">
        <div v-if="i!==1" :style="{order:i+1>=2 ? 3 : 1}"
            class="p-2 grow w-full xl:basis-1/4 md:basis-1/2 lg:basis-1/3  md:grow-0">
          <DashCard :todo="card" />
        </div>
      </template>
      <InfoCard v-if="cards.length" />
    </div>
  </div>
</template>
<script setup lang="ts">
import {DashCard,  InfoCard} from "@/components/view/home";
import type {Card} from "@/types"
defineProps<{cards: Card[] }>()

</script>