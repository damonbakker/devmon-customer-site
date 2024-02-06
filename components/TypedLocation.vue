<script setup lang="ts">
import {onMounted} from "vue";
import Typed from 'typed.js';


onMounted(() => {
  showTypedAnimation()
  //setTimeout(showTypedAnimation, 3000);
})

function showTypedAnimation() {

  const typed = new Typed('#typed-element', {
    strings: ['Operating in Sweden, the netherlands, '],
    typeSpeed: 60,
  });
}

</script>

<template>
  <div class=p-5><span id="typed-element"></span></div>
</template>
<style scoped>

</style>