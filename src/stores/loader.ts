import {defineStore, type PiniaCustomStateProperties} from "pinia";

interface State {
  isLoader: boolean
}
export const useLoaderStore = defineStore('loader',{
  state():State{
    return {
      isLoader: false
    }
  },
  getters:{
    getLoader: (s:State & PiniaCustomStateProperties<State>):boolean =>s.isLoader
  },
  actions:{
    changeLoader(value:boolean){
      this.isLoader = value
    }
  }
})