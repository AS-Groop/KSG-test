<template>
  <div :class="className" class="shape"></div>
  <div :class="className" class="shape"></div>
</template>

<script lang="ts" setup>
defineProps<{ className:string }>()
</script>

<style lang="scss">
.shape {
  z-index: 1;
  position: absolute;
  animation: blob 8s ease-in-out infinite;
  background: linear-gradient(64deg, #f34868 23%, #f24768 23%, #9e00ec 80%);
  &:nth-child(2n) {
    filter: blur(50px);
  }
}

.spin {
  animation: blob 8s ease-in-out infinite, spin 14s linear infinite;
}

@keyframes blob {
  0%, 100% {
    border-radius:24% 76% 35% 65% / 27% 36% 64% 73%
  }
  25% {
    border-radius:76% 24% 33% 67% / 68% 55% 45% 32%
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>