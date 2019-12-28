<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Grammar />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Grammar from '@/components/Grammar.vue';

export default {
  name: 'home',
  components: {
    Grammar,
    // HelloWorld,
  },
};
</script>
