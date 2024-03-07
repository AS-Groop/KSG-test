import type {User} from "@/types";
import {useAuthStore} from "@/stores/auth";
import {useDialogStore, useLoaderStore} from "@/stores";
import {computed, onMounted} from "vue";
import router from "@/router";


export const useAuth = () => {

  const loaderStore = useLoaderStore()
  const authStore = useAuthStore()
  const dialogStore = useDialogStore()

  onMounted(() => {
    authStore.fetchUser()
  })

  const errorLog = async (e:string|Error|unknown)=>{
    let message: string = ''
    if (typeof e === 'string') {
      message = e
    } else if (e instanceof Error) {
      message = e.message
    }
    loaderStore.changeLoader(false)
    await dialogStore.error({text: message})
  }

  const data = computed<User | null>(() => {
    return authStore.getUser
  })
  const registration = async (user: User) => {
    loaderStore.changeLoader(true)
    try {
      await authStore.register(user)
    } catch (e) {
      await errorLog(e)
    }
    loaderStore.changeLoader(false)
  };

  const login = async (user: User) => {
    loaderStore.changeLoader(true)
    try {
      await authStore.login(user)
    } catch (e) {
      await errorLog(e)
    }
    loaderStore.changeLoader(false)
  }

  const logout = async () => {
    const isDialog = await dialogStore.confirm({text: 'Do you wanna logout?', title: 'Logout'})
    if (isDialog) {
      loaderStore.changeLoader(true)
      try {
        await authStore.logout()
        await router.push('/login')
      } catch (e) {
        console.log(e)
      }
      loaderStore.changeLoader(false)
    }

  }

  return {
    registration,
    login,
    logout,
    data
  }
}

