import './assets/style/tailwind.scss'
import './assets/style/main.scss'

import { createApp, type App as dApp } from 'vue'
import { createPinia } from 'pinia'
import "@/plugins/firebase"

import App from './App.vue'
import router from './router'
import {getAuth} from "firebase/auth";

let app:dApp<Element> | null = null

const FetchAuth = getAuth()

FetchAuth.onAuthStateChanged(()=>{
    if(!app){
        app = createApp(App)
        app.use(createPinia())
        app.use(router)
        app.mount('#app')
    }
})

