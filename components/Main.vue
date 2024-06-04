<template>
  <div class="w-full default-container overflow-hidden">
    <Nav></Nav>
    <div class="part-0 container m-auto text-center devmon-hero relative ">
      <FloatingCircle></FloatingCircle>
      <div class="absolute text-center  transform -translate-x-1/2 -translate-y-1/2"
           style="left:50%;top: 40%;max-width: 100%;width: 900px">
        <div class="text-white mb-6">
          <!--          TODO:: CHOOSE FONT, use devmon mirrored color-->
          <span class="text-7xl">DEVMON</span><br>
          <span class="text-xl">Your personal freelancer, focused on delivering your idea in an efficient and maintainable solution</span>
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
      <div class="absolute -translate-x-1/2 left-1/2 top-3/4">
        <ChevronDownIcon class="h-12 text-highlights"></ChevronDownIcon>
      </div>
    </div>
    <Services class="w-full part-1">
    </Services>
    <div class="mt-12 mb-12" style="height: 250px"></div>
    <div class="w-full part-2">
      <div
          class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 grid lg:grid-cols-2 lg:items-center">
        <div>
          <h2 class="text-3xl font-bold sm:text-4xl lg:text-5xl"><span class="highlight-text">Developed</span> for
            you<br></h2>
          <p class="mt-6 text-lg ">All software devmon writes is <span class="highlight-text"> 100% owned by you</span>.
          </p>
          <p class="mt-6 text-lg ">The goal is to deliver software that can help you grow your business, as well as
            keeping you happy throughout our collaboration.<br>
            We make all our software self contained, meaning that should you decide to move elsewhere, it should be a
            smooth transition.
            We are confident in our ability to keep you happy, so should you want to move your software to another
            developer, we will help the other party get up to speed,
            <span class="highlight-text">free of charge.</span></p>
        </div>
        <div class="border-highlights border-b-2 border-t-2">
          <ul class="list-disc">
            <li>Software is always documented in a balanced approach.</li>
            <li>24/7 availability, every day of the year to make sure your systems stay online and healthy.</li>
            <li>Advice for realizing your ideas is always free of charge.</li>
            <li>All software is written to match industry standards, to minimize your dependence on us.</li>
            <li>We will always try to use open source software where possible, saving you money and keeping us happy.
            </li>
            <li>For critical bugs, there should be a fix deployed to production within 24 hours from the moment we
              become aware of it, or you will not be charged for the work.
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div w-full="" class="mt-12 mb-12">
      <div class="border border-highlights"></div>
    </div>
    <div class="w-full part-3">
      <div
          class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 grid lg:grid-cols-2 lg:items-center">
        <div class="">
          <PrototypeSVG class="w-4/5 fill-slate-100 mx-auto"></PrototypeSVG>
        </div>
        <div>
          <h2 class="text-3xl font-bold sm:text-4xl lg:text-5xl"><span class="highlight-text">Prototype</span> before
            you commit</h2>
          <p class="mt-6 text-lg ">There is no need to commit to large projects right away, a lot can change and what
            you had in mind might change.</p>
          <p class="mt-6 text-lg ">We can build a prototype first, a lean and minimum viable version of the
            project. If you like what the prototype has to offer, we can commit to realize it to its full potential</p>
          <p class="mt-6 text-lg ">This also gives you some extra room to change the requirements during the project</p>
        </div>
      </div>
    </div>
    <div w-full="" class="mt-12 mb-12">
      <div class="border border-highlights"></div>
    </div>
    <div class="w-full part-4">
      <div
          class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 grid lg:grid-cols-2 lg:items-center">
        <div>
          <h2 class="text-3xl font-bold sm:text-4xl lg:text-5xl">Any <span
              class="text-highlights">infrastructure </span> you like</h2>
          <p class="mt-6 text-lg ">If you have any specific technical requirements for your projects, we will make sure
            the project fits the bill</p>
          <p class="mt-6 text-lg ">Whether you wish to have the solution hosted on-site and watched by you or on a specific
            platform you are used to, it will be glad to deploy it anywhere you want it.</p>
          <p class="mt-6 text-lg ">You can also let us completely handle all of your infrastructure needs in the
            cloud, where you won't have to worry about scaling and server capacity.</p>
        </div>
        <div class="">
          <CloudSVG class="w-3/5 h-full fill-slate-100 mx-auto"></CloudSVG>
        </div>
      </div>
    </div>
    <div class="part-5">
      <section class="w-full max-w-[880px] px-7 lg:px-0 mx-auto">
        <div class="max-w-[625px] bg-oss-purple-extra-dark shadow-oss-card rounded-[20px] md:rounded-[48px] p-7 md:py-16 md:px-12
                        rotate-[-5deg] ml-auto

                        hover:rotate-0 transition-transform mb-4 sm:mb-12 md:mb-4" title="Make it easy to use" index="01">
          <h3 class="flex items-center gap-4 mb-10">
            <div class="bg-oss-purple text-oss-black w-[30px] h-[30px] rounded-full font-druk font-bold text-center text-[24px] leading-none pt-0.5">
              01
            </div>
            <span class="text-[18px] md:text-[24px] font-bold leading-[0.9]">Make it easy to use</span>
          </h3>
          <p class="text-[14px] md:text-[18px]">We have put a lot of effort into making our packages as user-friendly as possible. Ultimately, a package should be fun to use.</p>
        </div>
        <div class="max-w-[625px] bg-oss-purple-extra-dark shadow-oss-card rounded-[20px] md:rounded-[48px] p-7 md:py-16 md:px-12
                        rotate-[2.5deg]

                        hover:rotate-0 transition-transform mb-4 sm:mb-12 md:mb-4" title="Write excellent documentation" index="02">
          <h3 class="flex items-center gap-4 mb-10">
            <div class="bg-oss-purple text-oss-black w-[30px] h-[30px] rounded-full font-druk font-bold text-center text-[24px] leading-none pt-0.5">
              02
            </div>
            <span class="text-[18px] md:text-[24px] font-bold leading-[0.9]">Write excellent documentation</span>
          </h3>
          <p class="text-[14px] md:text-[18px]">We invest time in creating excellent documentation for each of our packages. This makes it easy to discover what a package does and what all the features are.</p>
        </div>
        <div class="max-w-[625px] bg-oss-purple-extra-dark shadow-oss-card rounded-[20px] md:rounded-[48px] p-7 md:py-16 md:px-12
                        rotate-[-5deg] ml-auto

                        hover:rotate-0 transition-transform mb-4 sm:mb-12 md:mb-4" title="Provide an extensive test suite" index="03">
          <h3 class="flex items-center gap-4 mb-10">
            <div class="bg-oss-purple text-oss-black w-[30px] h-[30px] rounded-full font-druk font-bold text-center text-[24px] leading-none pt-0.5">
              03
            </div>
            <span class="text-[18px] md:text-[24px] font-bold leading-[0.9]">Provide an extensive test suite</span>
          </h3>
          <p class="text-[14px] md:text-[18px]">All of our packages have an extensive test suite. This provides you (and us) with proof that the package code behaves correctly and works under all conditions.</p>
        </div>
        <div class="max-w-[625px] bg-oss-purple-extra-dark shadow-oss-card rounded-[20px] md:rounded-[48px] p-7 md:py-16 md:px-12
                        rotate-[2.5deg]

                        hover:rotate-0 transition-transform mb-4 sm:mb-12 md:mb-4" title="Write readable code" index="04">
          <h3 class="flex items-center gap-4 mb-10">
            <div class="bg-oss-purple text-oss-black w-[30px] h-[30px] rounded-full font-druk font-bold text-center text-[24px] leading-none pt-0.5">
              04
            </div>
            <span class="text-[18px] md:text-[24px] font-bold leading-[0.9]">Write readable code</span>
          </h3>
          <p class="text-[14px] md:text-[18px]">We structure and write our code in such a way that others can easily understand what is going on. Names of variables, functions and classes are chosen with care. You should be able to understand how the package works just by reading the code.</p>
        </div>
        <div class="max-w-[625px] bg-oss-purple-extra-dark shadow-oss-card rounded-[20px] md:rounded-[48px] p-7 md:py-16 md:px-12
                        rotate-[-5deg] ml-auto

                        hover:rotate-0 transition-transform mb-4 sm:mb-12 md:mb-4" title="Be flexible" index="05">
          <h3 class="flex items-center gap-4 mb-10">
            <div class="bg-oss-purple text-oss-black w-[30px] h-[30px] rounded-full font-druk font-bold text-center text-[24px] leading-none pt-0.5">
              05
            </div>
            <span class="text-[18px] md:text-[24px] font-bold leading-[0.9]">Be flexible</span>
          </h3>
          <p class="text-[14px] md:text-[18px]">We know we can’t imagine every scenario our code will be used in. That’s why we make our packages as customizable and extensible as possible. We don’t use the final keyword, and make everything protected by default instead of private. Our code is structured in small functions and classes that can be overwritten or extended.</p>
        </div>
        <div class="max-w-[625px] bg-oss-purple-extra-dark shadow-oss-card rounded-[20px] md:rounded-[48px] p-7 md:py-16 md:px-12
                        rotate-[2.5deg]

                        hover:rotate-0 transition-transform mb-4 sm:mb-12 md:mb-4" title="Keep the scope small" index="06">
          <h3 class="flex items-center gap-4 mb-10">
            <div class="bg-oss-purple text-oss-black w-[30px] h-[30px] rounded-full font-druk font-bold text-center text-[24px] leading-none pt-0.5">
              06
            </div>
            <span class="text-[18px] md:text-[24px] font-bold leading-[0.9]">Keep the scope small</span>
          </h3>
          <p class="text-[14px] md:text-[18px]">When creating a package we intentionally keep the scope small. In most cases, packages are created to be consumed in our projects. We would rather have a small package with one very polished feature, than a large package that tries to cover all possible edge cases and variations of a problem.</p>
        </div>
        <div class="max-w-[625px] bg-oss-purple-extra-dark shadow-oss-card rounded-[20px] md:rounded-[48px] p-7 md:py-16 md:px-12
                        rotate-[-5deg] ml-auto

                        hover:rotate-0 transition-transform mb-4 sm:mb-12 md:mb-4" title="Stay up to date" index="07">
          <h3 class="flex items-center gap-4 mb-10">
            <div class="bg-oss-purple text-oss-black w-[30px] h-[30px] rounded-full font-druk font-bold text-center text-[24px] leading-none pt-0.5">
              07
            </div>
            <span class="text-[18px] md:text-[24px] font-bold leading-[0.9]">Stay up to date</span>
          </h3>
          <p class="text-[14px] md:text-[18px]">When a new PHP or Laravel version comes out, our team spends time to make sure the test suite is running correctly and that a new package version is tagged. Usually, all of our Laravel packages are compatible with the major releases of the Laravel framework within a few days.</p>
        </div>
      </section>
    </div>
    <div class="filler part-last"></div>
  </div>
</template>
<script setup lang="ts">
import AnimatedSVGtitles from "~/components/Home/HeroBackground.vue";
import VanillaTilt from 'vanilla-tilt'
import {onMounted, ref} from 'vue'
import PrototypeSVG from "~/components/PrototypeSVG.vue";
import {ChevronDownIcon} from "@heroicons/vue/24/outline";
import CloudSVG from "~/components/CloudSVG.vue";
import FloatingCircle from "~/components/FloatingCircle.vue";

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