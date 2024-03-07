<template>
  <section class="px-4">
    <div class="text-2xl">
      <p ref="t1">
        Hello
      </p>
      <p ref="t2"><span class="emphasis">{{ data?.username }}</span> 😊</p>
      <p ref="t3">{{ clock }}</p>
      <p v-html="message"/>
    </div>
  </section>
</template>
<script lang="ts" setup>
import {todayMessage, useClock, useAuth} from "@/hooks";

const {data} = useAuth()

const clock = useClock()
const message = todayMessage()

</script>