import {defineStore} from "pinia";
import type {IDialog} from "@/types";


interface State {
  defaultConfirmOptions: IDialog | null | undefined
}

export const useDialogStore = defineStore('dialog', {
  state: ():State => {
    return {
      defaultConfirmOptions: {
        isConfirm: true,
        title: '',
        closeDelay: 12,
        text: '',
        resolve: () => {}
      }
    }
  },
  getters: {
    getData: s => s.defaultConfirmOptions,
  },
  actions: {
    async confirm(data: IDialog) {
      const { title, text} = {...data}

      return new Promise(resolve => {
        this.defaultConfirmOptions = {
          isConfirm: true,
          title,
          text,
          resolve
        }
      });
    },
    async error(data: IDialog ) {
      const { text} = {...data}

      return new Promise(resolve => {
        this.defaultConfirmOptions = {
          isConfirm: false,
          title: "Error message",
          text,
          resolve
        }
      });
    }
  }
})