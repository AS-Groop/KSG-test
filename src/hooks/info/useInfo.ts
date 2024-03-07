import {computed, onBeforeUnmount, onMounted, ref} from "vue";
import { type Pausable, useIntervalFn } from '@vueuse/core'
import {useTodoStore} from "@/stores";
import type {Nullable, timeOptions, Todo} from "@/types";

type time = string | Date | undefined
export function getCurrentTime(time?:time): string {
    const date:Date = time ? new Date(time) : new Date()
    return new Intl.DateTimeFormat('en-GB', {
        weekday: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        day: 'numeric',}).format(date)
}
export const useClock = (date?:string)=>{
    const value = ref<string>(getCurrentTime(date))
    let pausable: Nullable<Pausable> = null;

    onMounted(() => {
        useIntervalFn(() => {
            value.value = getCurrentTime()
        }, 1000)
    })

    onBeforeUnmount(() => {
        pausable?.pause()
    })

    return value
}


export function todayMessage(checked?:boolean){
    const todoStore = useTodoStore()
    const notDoneList = computed<Todo[]>(() => todoStore.getNotDoneTodos)
    const haveNoItem = computed<boolean>(() => todoStore.getAllTodos.length === 0)
    return computed<string>(() => {
        if (haveNoItem.value) return `you haven't registered <span class="font-bold">any task</span> yet.`
        if (notDoneList.value.length > 0) return `${notDoneList.value.length} more <span class="emphasis">task${notDoneList.value.length > 1 ? 's' : ''}</span> ${notDoneList.value.length > 1 ? 'are' : 'is'} left.`
        return `You're having a <span class="emphasis">great</span> day 🥰`
    })
}