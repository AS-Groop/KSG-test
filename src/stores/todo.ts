import {defineStore} from "pinia";
import type {Card} from "@/types";
import {getDatabase, ref as dbRef, push, remove, set, onValue, update} from "firebase/database";
import { useDialogStore, useLoaderStore} from "@/stores";


interface State {
    dashboardList: Card[]
    keys: string[]
}
export const useDashboardStore = defineStore('todoStore',{
    state:():State=>{
        return {
            dashboardList:[],
            keys:[]
        }
    },
    getters: {
        getAllCards: s=>s.dashboardList
    },
    actions: {
        async fetchCards() {
            const loaderStore = useLoaderStore()
            try {
                loaderStore.changeLoader(true)
                const db = getDatabase()
                onValue(dbRef(db, 'dashboard/'), (snapshot)=>{
                    const data = snapshot.val()
                    if(data) {
                        this.keys = Object.keys(data)
                        this.dashboardList = this.keys.map(key => {
                            return {...data[key], id: key} // class: text-green-500 || text-orange-400 || text-pink-700
                        })
                    }
                })
                loaderStore.changeLoader(false)

            } catch (e) {
                loaderStore.changeLoader(false)
                console.log(e)
            }
        },
        async addCard(data:Card){
            try {
                const createdAt = `${new Date()}`
                const todo: Card = { ...data, createdAt }
                const db = getDatabase();
                await push(dbRef(db, 'dashboard/'),todo).then(data=>{
                    this.fetchCards()
                });
            } catch (e) {
                console.log(e)
            }
        },
        async updateCard(todo:Card) {
            try {
                const db = getDatabase()
                await update(dbRef(db, 'dashboard/'+todo.id),todo)
            } catch (e) {
                console.log(e)
            }
        },
        async deleteCard(id:string) {
            try {
                const dialogStore = useDialogStore()
                const isDialog = await dialogStore.confirm({title: 'Delete Card', text: 'Do you want to delete this card? 🧐'})
                if(isDialog){
                    const db = getDatabase()
                    await remove(dbRef(db, 'dashboard/'+id))
                }
            } catch (e) {
                console.log(e)
            }
        }
    }
})