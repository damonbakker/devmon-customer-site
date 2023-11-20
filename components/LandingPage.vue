<script setup lang="ts">

import HeroBackground from "~/components/Home/HeroBackground.vue";
</script>

<template>
  <div class="w-full h-full default-container">
    <Nav></Nav>
    <div class="container m-auto text-center devmon-hero relative">
      <div class="absolute transform -translate-x-1/2 -translate-y-1/2" style="left:50%;top: 70%;max-width: 100%;width: 700px">
<!--        <img src="/devmon-hero.svg" class="invisible m-auto lg:visible">-->
        <HeroBackground></HeroBackground>
      </div>
      <div class="w-full text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div class="">
          <span class="text-7xl">DEVMON</span><br>
          <span class="text-sm">Software engineering focused on delivering your idea in an efficient and maintainable solution</span>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.default-container {
  min-height: 100%;
  background: #0f172a;
  color: rgba(229, 231, 235, 0.89)
}
.devmon-hero{
  height: 60%;
  min-height: 500px;
}
.easy-white {
  color: rgba(229, 231, 235, 0.89)
}
</style>