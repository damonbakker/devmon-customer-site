<script setup lang="ts">

import AnimatedText from "~/components/AnimatedText.vue";
</script>

<template>
  <div class="absolute left-0 alpha-circle">
    <AnimatedText></AnimatedText>
    <svg class="circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50"/>
    </svg>
  </div>

</template>

<style scoped>
.circle {
  animation: moveUpDown 5s linear infinite;
  fill: rgba(221, 117, 40, 0.75);
  margin-top: 0px;
}
.alpha-circle {
  animation: MoveUpDown 3s linear infinite;
  position: absolute;
  left: 70%;
  top: 3%;
  height: 35%;
  width: 35%;
  animation: slideInFromRight 1.5s;
}

@keyframes slideInFromRight {
  0%   {left: 200% }
  100% {left: 70%}
}
@keyframes moveUpDown {
  0%, 100% {
    margin-top: 0;
  }
  50% {
    margin-top: 10px;
  }
}
</style>