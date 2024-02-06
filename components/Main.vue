<template>
  <div class="w-full default-container">
    <Nav></Nav>
    <div class="part-0 container m-auto text-center devmon-hero relative">
      <div class="absolute text-center text-whit transform -translate-x-1/2 -translate-y-1/2"
           style="left:50%;top: 40%;max-width: 100%;width: 900px">
        <div class="text-white mb-6">
          <span class="text-7xl">DEVMON</span><br>
          <span class="text-xl">Software engineering focused on delivering your idea in an efficient and maintainable solution</span>
        </div>
        <AnimatedSVGtitles></AnimatedSVGtitles>
        <TypedLocation></TypedLocation>
        <div class="mt-5">
          <div
              class="cursor-pointer text-2xl font-medium rounded-md gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset w-1/2 m-auto   ring-gray-700  text-gray-200  hover:bg-gray-100  bg-gray-800 hover:bg-gray-700/50  focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-primary-400  ">
            Contact
          </div>
        </div>
      </div>
    </div>
    <Services class="w-full part-1">
    </Services>
    <div class="mt-12 mb-12" style="height: 250px"></div>
    <div class="w-full part-2">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 grid lg:grid-cols-2 lg:items-center">
        <div>
          <h2 class="text-3xl font-bold sm:text-4xl lg:text-5xl"><span class="highlight-text">Developed</span> for
            you<br></h2>
          <p class="mt-6 text-lg ">All software devmon writes is <span class="highlight-text"> 100% owned by you</span>, we do not have any legal say over it.</p>
          <p class="mt-6 text-lg ">Our goal is to deliver software that can help you grow your business, as well as
            keeping you happy throughout our collaboration.<br>
            We make all our software self contained, meaning that should you decide to move elsewhere, it should be a smooth transition.
            We will even help the other party get up to speed, free of charge.</p>
        </div>
        <div class="border-highlights border-b-2 border-t-2">
          <ul class="list-disc">
            <li>Software is always documented in a balanced approach.</li>
            <li>24/7 availability, every day of the year to make sure your systems stay online and healthy.</li>
            <li>Advice for realizing your ideas is always free of charge.</li>
            <li>All software is written to match industry standards, to minimize your dependence on us.</li>
            <li>We will always try to use open source software where possible, saving you money and making us happy.</li>
            <li>For critical bugs, there should be a fix deployed to production within 24 hours from the moment we
              become aware of it, or you will not be charged for the work.
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mt-12 mb-12" style="height: 250px"></div>
    <div class="w-full part-3">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 grid lg:grid-cols-2 lg:items-center">
        <div class="">
          <PrototypeSVG class="w-4/5 fill-slate-100 mx-auto"></PrototypeSVG>
        </div>
        <div>
          <h2 class="text-3xl font-bold sm:text-4xl lg:text-5xl"><span class="highlight-text">Prototype</span> before you commit</h2>
          <p class="mt-6 text-lg ">There is no need to commit to large projects right away, a lot can change and what you had in your might change.</p>
          <p class="mt-6 text-lg ">We can instead build a prototype first, a lean and minimum viable version of your idea. If you like what the prototype has to offer, we can commit to realize it to its full potential</p>
          <p class="mt-6 text-lg ">This also gives you some extra room to change the requirements during the project</p>
        </div>
      </div>
    </div>
    <div class="filler part-last"></div>
  </div>
</template>
<script setup lang="ts">
import AnimatedSVGtitles from "~/components/Home/HeroBackground.vue";
import VanillaTilt from 'vanilla-tilt'
import {onMounted, ref} from 'vue'
import PrototypeSVG from "~/components/PrototypeSVG.vue";

const element = ref(null)
onMounted(() => {
})
</script>

<style scoped>

.default-container {
  min-height: 100%;
  color: rgba(255, 255, 255, 0.89);
  background: linear-gradient(45deg, #072E42, #072E42, #113344, #072E42, #072E42, #004351);
  background-size: 1200% 1200%;
  animation: GradientBackground 18s ease infinite;
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