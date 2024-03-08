<template>
  <div class="grow rounded-xl flex-col flex overflow-hidden h-full">
    <ItemList :cards="cardList"/>
  </div>
</template>
<script setup lang="ts">
import {ItemList} from "@/components/view/home";
import {computed, onMounted, ref} from "vue";
import {useDashboardStore} from "@/stores";
import type {Card} from "@/types";
const cardStore = useDashboardStore()
const cardList = computed<Card[]>(() => cardStore.getAllCards);
onMounted( ()=>{
  cardStore.fetchCards()
})
</script>