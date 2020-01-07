<template>
  <section class='grammar-component'>
    <div class='previous'>
      <p>Previous Question</p>
      <button>Back button</button>
    </div>
    <div class='content'>
      <p>Correct the error(s) in the following sentence:</p>
      <h2>{{ currentQuestion }}</h2>
      <div class='grammar-input'>
        <input v-model='userInput' type='text'/>
        <button v-on:click='checkGrammar'>Submit</button>
        <p v-if='userInput'>{{ userInput }}</p>
      </div>
      <div v-if='correctedGrammar' class='feedback'>
        <p>Grammar Score:{{ correctedGrammar.grammarScore }}</p>
        <p>Corrected Sentence: {{ correctedGrammar.corrected }}</p>
        <p>Number of Corrections: {{ correctedGrammar.summary.numCorrections }}</p>
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
      questions: ['Here is a sentence that has one spilling error.', 'The black cat fliez over the red roof.', 'The last sentence is a fun one that iz just the beez neez.'],
      currentQuestion: '',
      userInput: '',
      correctedGrammar: '',
    };
  },
  methods: {
    checkGrammar: function() {
      reviewGrammar(this.userInput)
        .then(data => this.correctedGrammar = data)
        .then(data => console.log(data))
    },
  },
  mounted() {
    // This is where the fetch of questions will run and set to local state.
    this.currentQuestion = this.questions[0];
    console.log(this.currentQuestion);
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
