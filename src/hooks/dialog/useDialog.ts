
import {useDialogStore} from "@/stores";
import {computed} from "vue";
import type {IDialog} from "@/types";
export const useDialog = () => {
  const dialogStore = useDialogStore()

  const confirm = (value:boolean)=>{
    if(data?.value?.resolve){
      data.value.resolve(value)
      dialogStore.defaultConfirmOptions = null
    }

  }
  const data = computed<IDialog | null | undefined>(()=>dialogStore.getData)
  return {
    confirm,
    data
  }
};