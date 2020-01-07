<template>
  <section class='cards-component'>
    <div class='previous'>
      <p>Previous Question</p>
      <button>Back button</button>
      <!-- <p>Question number: {{ qnum }}</p> -->
    </div>
    <div class='content'>
      <button>Play</button>
      <p>Type out the sentence</p>
      <div class='grammar-input'>
        <input v-model='userInput' type='text'/>
        <button v-on:click='test'>Submit</button>
        <p>{{ userInput }}</p>
      </div>
    </div>
    <div class='next'>
      <p>Next Question</p>
      <button>Next Button</button>
    </div>
  </section>
</template>

<script>
import { reviewGrammar } from '../api/apiCalls';

export default {
  data() {
    return {
      userInput: '',
    };
  },
  methods: {
    checkGrammar: async () => {
      console.log(this.userInput);
      const corrected = await reviewGrammar();
      console.log(corrected);
    },
  },
};
</script>

<style>
</style>
