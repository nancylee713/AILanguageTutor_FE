<template>
  <section class='grammar-component'>
    <div class='previous'>
      <p>Previous Question</p>
      <button v-on:click='previousQuestion'>Back button</button>
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
        <p>Number of Corrections: {{ correctedGrammar.summary.numCorrections }}</p>
        <p>Corrected Sentence: {{ correctedGrammar.corrected }}</p>
      </div>
    </div>
    <div class='next'>
      <p>Next Question</p>
      <button v-on:click='nextQuestion'>Next Button</button>
    </div>
  </section>
</template>

<script>
import { getQuestions, reviewGrammar } from '../api/apiCalls';

export default {
  data() {
    return {
      // qnum: String,
      questions: [{text: 'The man jump over the puddle.'}],
      currentQuestion: '',
      userInput: '',
      correctedGrammar: '',
    };
  },
  methods: {
    checkGrammar: function() {
      reviewGrammar(this.userInput)
        .then(data => this.correctedGrammar = data);
    },
    nextQuestion: function() {
      const i = this.questions.indexOf(this.currentQuestion);
      if(i !== this.questions.length - 1) {
        this.currentQuestion = this.questions[i + 1].text;
      }
    },
    previousQuestion: function() {
      const i = this.questions.indexOf(this.currentQuestion);
      if(i !== 0) {
        this.currentQuestion = this.questions[i - 1].text;
      }
    }
  },
  beforeMount() {
    getQuestions()
      .then(res => this.questions = res)
      .catch(error => console.error(error));
  },
  mounted() {
    this.currentQuestion = this.questions[0].text
  }
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

  .grammar-input {
    width: 90%;
  }

  .next {
    border: 1px solid black;
  }

  input {
    display: block;
    height: 40px;
    margin: 10px;
    width: 100%;
  }

  button {
    background-color: #7957d5;
    border-color: transparent;
    border-radius: 5px;
    color: white;
    font-size: .9em;
    height: 40px;
    width: 150px;
  }

  button:hover {
    cursor: pointer;
  }
</style>
