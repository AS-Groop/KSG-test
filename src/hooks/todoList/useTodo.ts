import {useTodoStore} from "@/stores";
import type {Todo} from "@/types";
export const useTodo = ()=>{
    const todoStore = useTodoStore()

    const addTodo = async(text:string)=>{
        await todoStore.addTodo(text)
    }
    const updateTodo = async(todo:Todo)=>{
        await todoStore.updateTodo(todo)
    }
    const deleteTodo = async(id:string)=>{
        await todoStore.deleteTodo(id)
    }

    return {
        addTodo,
        updateTodo,
        deleteTodo
    }
}