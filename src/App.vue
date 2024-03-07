<script setup lang="ts">
import { RouterView } from 'vue-router'
import {Dialog, Loader} from "@/components/global";
</script>

<template>
  <Dialog/>
  <Loader/>
  <RouterView />
</template>

