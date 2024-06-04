<template>
  <div>
    <div class="container m-auto pl-1 pr-1" id="services-container">
      <div class="w-full title text-4xl ml-4 ">Devmon <span class="highlight-text">services</span></div>
      <div class="badge-container m-4">
        <div
            :class="{'highlight-bg': appsTag}" @click="appsTag = !appsTag"
            class="ml-2 cursor-pointer font-medium rounded-md text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset  ring-gray-700  text-gray-200  hover:bg-gray-100  bg-gray-800 hover:bg-gray-700/50  focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-primary-400 inline-flex items-center">
          Apps
        </div>
        <div
            :class="{'highlight-bg': consultTag}" @click="consultTag = !consultTag"
            class="ml-2 cursor-pointer font-medium rounded-md text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset  ring-gray-700  text-gray-200  hover:bg-gray-100  bg-gray-800 hover:bg-gray-700/50 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-primary-400 inline-flex items-center">
          Consulting
        </div>
        <div
            :class="{'highlight-bg': aiTag}" @click="aiTag = !aiTag"
            class=" ml-2 cursor-pointer font-medium rounded-md text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset  ring-gray-700  text-gray-200  hover:bg-gray-100  bg-gray-800 hover:bg-gray-700/50  focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-primary-400 inline-flex items-center">
          AI
        </div>
        <div
            :class="{'highlight-bg': customSoftwareTag}" @click="customSoftwareTag = !customSoftwareTag"
            class=" ml-2 cursor-pointer font-medium rounded-md text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset  ring-gray-700  text-gray-200  hover:bg-gray-100  bg-gray-800 hover:bg-gray-700/50  focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-primary-400 inline-flex items-center">
          Custom solutions
        </div>
      </div>
      <div class="service-container ml-4 relative">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-2">
          <ServiceCard title="Android development"
                       sub-text="Developing native android apps from scratch. We can also support existing/legacy applications and can assist in updating the app to be ready for the next version of Android."
                       v-if="noTags || appsTag "
          ></ServiceCard>
          <ServiceCard title="Enterprise web app/api"
                       sub-text=""
                       v-if="noTags || appsTag || customSoftwareTag"
          ></ServiceCard>
          <ServiceCard title="Cloud infrastructure"
                       sub-text=""
                       v-if="noTags || consultTag || customSoftwareTag"
          ></ServiceCard>
          <ServiceCard title="Consulting"
                       sub-text=""
                       v-if="consultTag"
          ></ServiceCard>
          <ServiceCard title="Implementing AI | Machine learning"
                       sub-text="Supervised/unsupervised learning for creating custom modals or implementing existing AI technologies
              into your software stack."
                       v-if="noTags || consultTag || aiTag"
          ></ServiceCard>
          <ServiceCard title="Modernizing legacy software"
                       sub-text=""
                       v-if="noTags || customSoftwareTag"

          ></ServiceCard>
          <ServiceCard title="Cross platforms mobile apps"
                       sub-text=""
                       v-if="noTags || appsTag"
          ></ServiceCard>
          <ServiceCard title="Full stack development for hire"
                       sub-text=""
                       v-if="noTags || consultTag"
          ></ServiceCard>
          <ServiceCard title="Dynamics 365 solutions"
                       sub-text="Powerapps, custom solutions to problems to make your time on this platform more efficient. Where the
              default systems are lacking, a custom tailored solution might be the best fit."
                       v-if="noTags || consultTag"
          ></ServiceCard>
          <ServiceCard title="Cross platform PC apps"
                       sub-text=""
                       v-if="noTags || customSoftwareTag || appsTag"
          ></ServiceCard>
        </div>
        <div class="absolute bg-amber-200 top-0 w-full">
        </div>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import AnimatedSVGtitles from "~/components/Home/HeroBackground.vue";
import VanillaTilt from 'vanilla-tilt'
import {onMounted, ref} from 'vue'
import ServiceCard from "~/components/ServiceCard.vue";

let consultTag = ref(false)
let appsTag = ref(false)
let aiTag = ref(false)
let customSoftwareTag = ref(false)

const noTags = computed(() => {
  return consultTag.value === false && appsTag.value === false && aiTag.value === false && customSoftwareTag.value === false;
})

const elementAndroid = ref(null)
onMounted(() => {
  VanillaTilt.init(elementAndroid.value, {max: 20, speed: 3000})
})
</script>

<style scoped>
.default-container {
  min-height: 100%;
  color: rgba(229, 231, 235, 0.89);
  background-image: linear-gradient(to bottom, #0f172a, #0f172a, #0f172a, #0f172a, #0f172a, #0e1b2f, #0d2033, #0c2438, #072e42, #01394a, #004351, #004e57);;
}

.devmon-hero {
  height: 100vh;
  min-height: 500px;
}

.hex3 {
  background: red;
  -webkit-clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
  clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
}

.highlight-text {
  color: #00A8BB;
}

.highlight-bg {
  background-color: #00A8BB;
}

.filler {
  height: 500px;
  width: 100%;
}


</style>