<template>
  <div class="h-screen overflow-hidden relative flex justify-center items-center">
    <Blob className="w-[400px] h-[400px] top-1/2 right-1/2"/>
    <Blob className="w-[200px] h-[300px] bottom-1/2 left-2/3 spin"/>
    <div class="p-8 relative z-10 max-w-6xl rounded-2xl shadow-[0_0_8px_rgba(0,0,0,0.35)]">
      <Form/>
    </div>
  </div>
</template>


<script lang="ts" setup>
import Form from "@/components/view/login/Form.vue";
import Blob from "@/components/view/login/Blob.vue";

</script>
