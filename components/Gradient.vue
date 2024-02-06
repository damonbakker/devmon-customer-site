<script setup lang="ts">
import {onMounted} from "vue";

let context, canvas;
let time = 0
onMounted(() => {
})

</script>

<template>
  <div class="gradient-body">

  </div>
</template>
<style scoped>
.gradient-body {
  background: linear-gradient(45deg, #0F172A, #0F172A, #0F172A, #0D2033, #072E42, #004351);
  background-size: 1200% 1200%;
  animation: GradientBackground 9s ease infinite;
}

@keyframes GradientBackground {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>