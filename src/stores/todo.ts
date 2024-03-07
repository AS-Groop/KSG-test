import {defineStore} from "pinia";
import type {Todo} from "@/types";
import {getDatabase, ref as dbRef, push, remove, set, onValue, update} from "firebase/database";
import {useAuthStore, useDialogStore, useLoaderStore} from "@/stores";


interface State {
    todoList: Todo[]
    keys: string[]
}
export const useTodoStore = defineStore('todoStore',{
    state:():State=>{
        return {
            todoList:[],
            keys:[]
        }
    },
    getters: {
        getAllTodos: s=>s.todoList,
        getNotDoneTodos: s=>s.todoList.filter(i=>!i.done),
        getDoneTodos: s=>s.todoList.filter(i=>i.done),
    },
    actions: {
        async fetchTodos() {
            const loaderStore = useLoaderStore()
            try {
                loaderStore.changeLoader(true)
                const authStore = useAuthStore()
                const uid = authStore.getUid()
                const db = getDatabase()
                onValue(dbRef(db, 'users/' + uid + '/todos'), (snapshot)=>{
                    const data = snapshot.val()
                    if(data) {
                        this.keys = Object.keys(data)
                        this.todoList = this.keys.map(key => {
                            return {...data[key], id: key}
                        })
                    }
                })
                loaderStore.changeLoader(false)

            } catch (e) {
                loaderStore.changeLoader(false)
                console.log(e)
            }
        },
        async addTodo(text:string){
            const loaderStore = useLoaderStore()
            try {
                const authStore = useAuthStore()
                const createdAt = `${new Date()}`
                const done = false
                const todo: Todo = { text, createdAt, done }
                const uid = authStore.getUid()
                const db = getDatabase();
                await push(dbRef(db, 'users/'+uid+'/todos'),todo).then(data=>{
                    this.fetchTodos()
                });
            } catch (e) {
                console.log(e)
            }
        },
        async createTodoGroup(name:string){},
        async updateTodo(todo:Todo) {
            try {
                const authStore = useAuthStore()
                const uid = authStore.getUid()
                const db = getDatabase()
                await update(dbRef(db, 'users/'+uid+'/todos/'+todo.id),todo)
            } catch (e) {
                console.log(e)
            }
        },
        async deleteTodo(id:string) {
            try {
                const dialogStore = useDialogStore()
                const isDialog = await dialogStore.confirm({title: 'Delete Todo', text: 'Do you want to delete this todo? 🧐'})
                if(isDialog){
                    const authStore = useAuthStore()
                    const uid = authStore.getUid()
                    const db = getDatabase()
                    await remove(dbRef(db, 'users/'+uid+'/todos/'+id))
                }
            } catch (e) {
                console.log(e)
            }
        }
    }
})