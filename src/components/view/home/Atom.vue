<template>
  <div class="mol">
    <div class="atom">
      <div class="line line-1"></div>
      <div class="line line-2"></div>
      <div class="line line-3"></div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.mol {
  display: flex;
  align-items: center;
  justify-content: center;
}
.atom {
  position: relative;
  display: flex;
  height: 190px;
  width: 190px;
  align-items: center;
  justify-content: center;
  --color: #40ff9c;
}
.atom::before {
  content: "Stable";
  color: #20ce70;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  width: 130px;
  height: 130px;
  background: rgba(#20ce70, 0.1);
  border-radius: 50%;
  animation: blob 8s ease-in-out infinite;
}

@keyframes blob {
  0%, 100% {
    border-radius:24% 76% 35% 65% / 27% 36% 64% 73%;
    filter: blur(0px);
  }
  50%{
    filter:blur(2px);
  }
  25% {
    border-radius:76% 24% 33% 67% / 68% 55% 45% 32%
  }
}

.line {
  width: 110%;
  height: 110%;
  position: absolute;
  opacity: 0.7;
  border: 2px solid var(--color);
  border-bottom: 0;
  filter: drop-shadow(0 0 5px var(--color));
}
.line-1 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: line1 4s linear infinite;
}

@keyframes line1 {
  0% {
    transform: rotateY(65deg) rotateX(15deg) rotateZ(0deg);
  }
  100% {
    transform: rotateY(65deg) rotateX(15deg) rotateZ(360deg);
  }
}

.line-2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: line2 4s linear infinite;
}
@keyframes line2 {
  0% {
    transform: rotateX(70deg) rotateY(18deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(70deg) rotateY(18deg) rotateZ(360deg);
  }
}
/* line 3 */
.line-3 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: line3 4s linear infinite;
}
@keyframes line3 {
  0% {
    transform: rotateX(295deg) rotateY(36deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(295deg) rotateY(36deg) rotateZ(360deg);
  }
}

</style>
<script setup lang="ts">
</script>