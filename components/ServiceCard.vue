<template>
  <div ref="element"
       class="partial-border-pseudo gap-x-8 gap-y-4 rounded-xl flex flex-col flex-1 px-4 py-5 sm:p-6 dark:bg-gray-900/50 partial-border relative hover:scale-105 transition-transform hover:z-10">
    <div class="absolute h-full w-full left-0 top-0">
      <div class="w-full h-full glass-shine-effect"></div>
    </div>
    <div class="text-xl">{{ title }}</div>
    <div>{{ subText }}
    </div>
  </div>
</template>
<script setup lang="ts">
import {onMounted, ref} from "vue";
import VanillaTilt from "vanilla-tilt";

const props = defineProps({
  'title': String,
  'subText': String,
})

const element = ref(null)

onMounted(() => {
  VanillaTilt.init(element.value, {max: 20, speed: 3000})
})
</script>

<style scoped>
.glass-shine-effect {
  box-shadow: 0 8px 32px 0 rgba(107, 107, 107, 0.37);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  transition: transform 100ms ease;
  overflow: hidden;
}

.glass-shine-effect:before {
  content: "";
  position: absolute;
  height: 150%;
  width: 25px;
  transform: rotate(30deg);
  background-color: rgba(0, 168, 187, 0.58);
  left: -100%;
}

.glass-shine-effect:hover:before {
  transition: left 800ms ease;
  left: 120%;
}

.easy-white {
  color: rgba(229, 231, 235, 0.89)
}

.partial-border-pseudo {
  position: relative;
  text-align: center;
}

.partial-border-pseudo::before,
.partial-border-pseudo::after {
  position: absolute;
  content: "";
  width: 25%;
  height: 25%;
}

.partial-border-pseudo::before {
  left: 0;
  top: 0;
  border-left: 3px solid #00A8BB;
  border-top: 3px solid #00A8BB;
}

.partial-border-pseudo::after {
  right: 0;
  bottom: 0;
  border-right: 3px solid #00A8BB;
  border-bottom: 3px solid #00A8BB;
}

</style>