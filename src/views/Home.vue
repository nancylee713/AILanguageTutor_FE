<template>
  <div class="home">
    <h1>Language Learner</h1>
    <h2 class='welcome'>Welcome to Language Learner where we are commited to assisting your language learning needs!</h2>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
};
import AudioRecorder from 'vue-audio-recorder'
</script>

<style>
  h1 {
    font-size: 2em;
    margin: 40px;
  }

  .welcome  {
    font-size: 1.5em;
    width: 80%;
    margin: auto;
  }
</style>
