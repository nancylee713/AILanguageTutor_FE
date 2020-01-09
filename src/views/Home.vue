<template>
  <div class="home">
    <h1>AI Language Learner</h1>
    <h2 class='welcome'>Welcome to AI Language Learner where we are commited to assisting your language learning needs!</h2>
      <audio-recorder
    upload-url="YOUR_API_URL"
    :attempts="3"
    :time="2"
    :headers="headers"
    :before-recording="callback"
    :pause-recording="callback"
    :after-recording="callback"
    :select-record="callback"
    :before-upload="callback"
    :successful-upload="callback"
    :failed-upload="callback"/>
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
