<template>
  <section class='grammar-component'>
    <div class='previous'>
      <p>Previous Question</p>
      <button>Back button</button>
      <!-- <p>Question number: {{ qnum }}</p> -->
    </div>
    <div class='content'>
      <p>Type out the sentence</p>
      <div class='grammar-input'>
        <input v-model='userInput' type='text'/>
        <button v-on:click='checkGrammar'>Submit</button>
        <p>{{ userInput }}</p>
      </div>
      <div v-if='correctedGrammar' class='feedback'>
        <p>Grammar Score:{{ correctedGrammar.grammarScore }}</p>
        <p>Corrected Sentence: {{ correctedGrammar.corrected }}</p>
        <p></p>
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
        .then(data => this.correctedGrammar = data)
        .then(data => console.log(data))
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
