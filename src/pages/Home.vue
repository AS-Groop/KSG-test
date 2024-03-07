<template>
  <div class="p-2 grow shadow-[0_0_8px_rgba(0,0,0,0.25)] rounded-xl flex-col flex overflow-hidden h-full">
    <div class="flex flex-wrap grow justify-center md:justify-between items-start">
      <Info/>
      <TodoControl
        @checked="(e:Event)=>{checked=(e.target as HTMLInputElement).checked}"
      />
    </div>
    <ItemList :todos="todoList"/>
  </div>
</template>
<script setup lang="ts">
import {Info, TodoControl, ItemList} from "@/components/view/home";
import {computed, onMounted, ref} from "vue";
import {useTodoStore} from "@/stores";
import type {Todo} from "@/types";
const todoStore = useTodoStore()
const checked = ref<boolean>(true)
const todoList = computed<Todo[]>(() => checked.value ? todoStore.getAllTodos : todoStore.getNotDoneTodos);
onMounted( ()=>{
  todoStore.fetchTodos()
})
</script>