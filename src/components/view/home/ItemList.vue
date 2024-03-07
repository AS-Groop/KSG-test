<template>
  <div class="mt-1 overflow-y-auto h-full">
    <div class="flex flex-wrap w-full">
      <template v-for="todo in todos" :key="todo.key">
        <div class="p-2 grow w-full md:basis-1/2  md:grow-0">
          <TodoCard
              :todo="todo" @toggle="updateTodo"
              @delete="deleteTodo"
          />
        </div>
      </template>

    </div>
  </div>
</template>
<script setup lang="ts">
import {TodoCard} from "@/components/view/home";
import type {Todo} from "@/types"
import {useTodo} from "@/hooks";
const {updateTodo, deleteTodo} = useTodo()

defineProps<{todos: Todo[] }>()

</script>