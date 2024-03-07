<template>
  <div
      class="card todo-card shadow-[0_0_6px_rgba(0,0,0,0.25)]"
      :class="todo.done ? 'done' : ''"
  >
    <p
        class="text-xl"
        :class="todo.done ? 'line-through' : ''"
    >
      {{ todo.text }}
    </p>

    <div class="flex justify-end mt-4">
      <p class="text-sm text-right text-gray-500 mr-auto mt-2">
        {{ createdAt }}
      </p>
      <Button
          class="btn-error mr-2"
          @click="emits('delete', todo.id)"
      >
        Delete
      </Button>
      <Button
          :class="todo.done ? 'btn-warning' : 'btn-success'"
          @click="emits('toggle', {...todo, done: !todo.done})"
      >
        {{ todo.done ? 'Revert' : 'Done' }}
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, type PropType} from 'vue'
import type { Todo } from '@/types'
import {getCurrentTime} from "@/hooks";
import {Button} from '@/components/ui'

const props = defineProps({
  todo: {
    type: Object as PropType<Todo>,
    default: null
  }
})

const emits = defineEmits(['delete', 'toggle'])

const createdAt = computed(() => getCurrentTime(props.todo?.createdAt ?? ''));

</script>

<style scoped>

</style>
