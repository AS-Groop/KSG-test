<template>
  <h1 class="font-bold text-indigo-800 dark:text-indigo-200 text-3xl text-center mb-8">{{ auth ? "Registration" : "Login" }}</h1>
  <h2 class="font-bold text-2xl text-center dark:text-gray-50 mb-8">Vue3 + TypeScript + Pina <br> Todo App</h2>
    <form @submit.prevent class="flex flex-col gap-1 items-center justify-center p-4 rounded-2xl">
      <Input
          v-if="auth"
          placeholder="Username"
          v-model="user.username"
          @keydown.enter.prevent=""
      />
      <Input
          placeholder="Email"
          v-model="user.email"
          type="email"
          @keydown.enter.prevent=""
      />
      <Input
          placeholder="Password"
          v-model="user.password"
          type="password"
          @keydown.enter.prevent=""
      />
      <Button class="btn-primary w-full" type="submit"  @submit="submit" @click="submit">Submit</Button>
      <p class="cursor-pointer text-blue-700 font-bold text-sm mt-2"  @click="auth = !auth">{{auth ? "Login" : "Registration"}}</p>
    </form>
</template>


<script setup lang="ts">
import {Input, Button} from "@/components/ui";
import {useAuth} from "@/hooks";
import {ref} from "vue";
import type {User} from "@/types";
import router from "@/router";
const {registration, login} = useAuth()


defineEmits<{
  (e: 'submit', user: User): void
}>()


const user = ref<User>({
  email: "",
  password: "",
  username:""
});

let auth = ref<boolean>(false)

const submit = async ()=>{
  if (auth.value){
    await registration(user.value)
  } else {
    await login(user.value)
  }
  await router.push('/')
  user.value.email = ""
  user.value.password = ""
  user.value.username = ""
}

</script>

