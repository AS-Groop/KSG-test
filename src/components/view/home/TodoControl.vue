<template>
<section class="px-4 md:basis-1/2 w-full mt-4" ref="t5">
  <div class="flex justify-end">
    <label class="inline-flex items-center mr-2">
      <input
          @change="(e:Event)=>{$emit('checked', e)}"
          type="checkbox"
          class=""
          checked
      />
      <span class="ml-2">Show All</span>
    </label>
    <Button
        class="bg-indigo-500 hover:bg-indigo-700"
        @click="save"
    >
      Save
    </Button>
  </div>
  <div class="mt-2 w-full">
    <Input
        v-model.trim="text"
        placeholder="Enter somethings..."
        @keydown.enter="save"
    />
  </div>
</section>
</template>
<script setup lang="ts">
import {Button, Input} from "@/components/ui";
import {ref} from "vue";
import {useTodo} from "@/hooks";
const {addTodo} = useTodo()

defineEmits<{
  (e:'checked', event: Event):void
}>()

const text = ref<string>('');

const save =async ()=>{
  if(text.value){
    await addTodo(text.value)
    text.value = ''
  }
}
</script>