<script setup lang="ts">
import { RouterView } from 'vue-router'
import {Dialog, Loader} from "@/components/global";
import {useHelpers} from "@/hooks";
const {isToggle, isDark} = useHelpers()
!isDark ? isToggle():''
</script>

<template>
  <Dialog/>
  <Loader/>
  <RouterView />
</template>

