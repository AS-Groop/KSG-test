import {useDark, useToggle} from "@vueuse/core";
import {useLoaderStore} from "@/stores";

export const useHelpers = ()=>{
  const loaderStore = useLoaderStore()

  const isDark = useDark({
    initialValue:"dark"
  })
  const isToggle = useToggle(isDark)

  const isLoader = (value:boolean) => loaderStore.changeLoader(value)

  return {
    isToggle,
    isDark,
    isLoader
  }
}