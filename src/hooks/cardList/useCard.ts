import {useDashboardStore} from "@/stores";
import type {Card} from "@/types";
export const useCard = ()=>{
    const dashboardStore = useDashboardStore()

    const addCard = async(data:Card)=>{
        await dashboardStore.addCard(data)
    }
    const updateCard = async(todo:Card)=>{
        await dashboardStore.updateCard(todo)
    }
    const deleteCard = async(id:string)=>{
        await dashboardStore.deleteCard(id)
    }

    return {
        addCard,
        updateCard,
        deleteCard
    }
}