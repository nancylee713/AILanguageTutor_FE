<template>
  <section class='grammar-component'>
    <div class='previous'>
      <p>Previous Question</p>
      <button>Back button</button>
      <!-- <p>Question number: {{ qnum }}</p> -->
    </div>
    <div class='content'>
      <button>Play</button>
      <p>Type out the sentence</p>
      <div class='grammar-input'>
        <input @input='updateUserInput($event.target.value)' type='text'/>
        <button v-on:keyup='checkGrammar($event)'>Submit</button>
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
      // qnum: String,
      // questions: [],
      userInput: '',
      // correctedGrammar: '',
    };
  },
  methods: {
    updateUserInput: (inputValue) => {
      console.log(inputValue);
      // this.userInput = inputValue;
    },
    checkGrammar: async () => {
      console.log(this.userInput);
      const correct = await reviewGrammar(this.userInput);
      console.log(correct);
    },
  },
};
</script>

<style>
  .grammar-component {
    display: flex;
  }

  .previous {
    border: 1px solid black;
  }

  .content {
    border: 1px solid black;
  }

  .next {
    border: 1px solid black;
  }
</style>
