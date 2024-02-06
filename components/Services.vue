<template>
  <div>
    <div class="container m-auto pl-1 pr-1">
      <div class="w-full title text-4xl ml-4 ">Devmon <span class="highlight-text">services</span></div>
      <div class="badge-container m-4">
        <div
            class="ml-2 cursor-pointer font-medium rounded-md text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset  ring-gray-700  text-gray-200  hover:bg-gray-100  bg-gray-800 hover:bg-gray-700/50  focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-primary-400 inline-flex items-center">
          Apps
        </div>
        <div
            class="ml-2 cursor-pointer font-medium rounded-md text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset  ring-gray-700  text-gray-200  hover:bg-gray-100  bg-gray-800 hover:bg-gray-700/50 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-primary-400 inline-flex items-center">
          Consulting
        </div>
        <div
            class=" ml-2 cursor-pointer font-medium rounded-md text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset  ring-gray-700  text-gray-200  hover:bg-gray-100  bg-gray-800 hover:bg-gray-700/50  focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-primary-400 inline-flex items-center">
          AI
        </div>
        <div
            class=" ml-2 cursor-pointer font-medium rounded-md text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset  ring-gray-700  text-gray-200  hover:bg-gray-100  bg-gray-800 hover:bg-gray-700/50  focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-primary-400 inline-flex items-center">
          Custom solutions
        </div>
      </div>
      <div class="service-container ml-4">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-2">
          <div ref="element"
               class="partial-border-pseudo gap-x-8 gap-y-4 rounded-xl flex flex-col flex-1 px-4 py-5 sm:p-6 dark:bg-gray-900/50 partial-border">
            <div class="text-xl">Android development</div>
            <div>Developing native android apps from scratch. We can also support existing applications and update the
              code to be ready for the next version of android
            </div>
          </div>
          <div class="gap-x-8 gap-y-4 rounded-xl flex flex-col flex-1 px-4 py-5 sm:p-6 dark:bg-gray-900/50">Android
            apps
          </div>
          <div class="gap-x-8 gap-y-4 rounded-xl flex flex-col flex-1 px-4 py-5 sm:p-6 dark:bg-gray-900/50">Android
            apps
          </div>
          <div class="gap-x-8 gap-y-4 rounded-xl flex flex-col flex-1 px-4 py-5 sm:p-6 dark:bg-gray-900/50">
            Prototyping
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import AnimatedSVGtitles from "~/components/Home/HeroBackground.vue";
import VanillaTilt from 'vanilla-tilt'
import {onMounted, ref} from 'vue'

const element = ref(null)
onMounted(() => {
  VanillaTilt.init(element.value, {max: 20, speed: 3000})
})
</script>

<style scoped>
.default-container {
  min-height: 100%;
  //background: #0f172a;
  color: rgba(229, 231, 235, 0.89);
  background-image: linear-gradient(to bottom, #0f172a, #0f172a, #0f172a, #0f172a, #0f172a, #0e1b2f, #0d2033, #0c2438, #072e42, #01394a, #004351, #004e57);;
}

.devmon-hero {
  height: 100vh;
  min-height: 500px;
}

.part-1 {
  //background: rgba(54, 185, 190, 0.51);
  height: 500px;
}

.highlight-text {
  color: #00A8BB;
}

.filler {
  height: 500px;
  width: 100%;
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