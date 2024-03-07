// import { ref, computed } from 'vue'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, type Auth} from "firebase/auth";
import { getDatabase, ref as dRef, set , onValue} from "firebase/database";
import { defineStore } from 'pinia'
import type {User} from "@/types";

interface State {
  uid?: string | null,
  user: User | null
}
export const useAuthStore = defineStore('auth', {
  state: ():State => {return {
    uid: null,
    user: null
  }},

  getters: {
    getUID: (s)=>s.uid,
    getUser: (s):User | null =>s.user
  },

  actions: {

    async login(user: User){
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, user.email, user.password||'')
      } catch (e) {
        console.log(e)
        throw e
      }
    },

    async register(user: User) {
      try {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, user.email, user.password||'')
        const uid = this.getUid()
        const db = getDatabase();
        await set(dRef(db, `/users/${uid}/info`), {
          username: user.username || 'User',
          email: user.email,
        });
      } catch (e) {
        console.log(e)
        throw e
      }
    },

    getUid():string|null {
      const user = getAuth().currentUser
      this.uid = user?.uid || ''
      return user ? user.uid : null
    },

    fetchUser():string|null|void {
      const uid = this.getUid()
      const db = getDatabase();
      const dbRef = dRef(db, '/users/'+uid+'/info')
      onValue(dbRef, snapshot => {
        this.user = snapshot.val()
      })
    },

    async logout(){
      const auth = getAuth()
      await signOut(auth)

    }
  },
})
