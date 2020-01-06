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
        <input v-model='userInput' type='text'/>
        <button v-on:click='checkGrammar'>Submit</button>
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
      // qnum: String,
      // questions: [],
      userInput: '',
      correctedGrammar: '',
    };
  },
  methods: {
    checkGrammar: function () {
      reviewGrammar(this.userInput)
        .then(data => this.correctedGrammar = data);
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
