<template>
  <div class="p-2 max-w-[200px] shadow-[0_0_8px_rgba(0,0,0,0.25)] rounded-xl">
    <span class="text-3xl font-bold text-indigo-500">Themes</span>
    <Button class="btn-warning mt-2" @click="createGroup('asd')">New Theme</Button>
    <div class="flex mt-4 flex-col w-full">
      <p class="py-2 cursor-pointer text-lg overflow-hidden">
        asfdsfdsfdsfss sssssssssssssssssss ssssssssssssssssssssssssssssssssssssssssss
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
import {useTodoStore} from "@/stores";
const todoStore = useTodoStore()
const createGroup = (name:string)=>{
  todoStore.createTodoGroup(name)
}

</script>