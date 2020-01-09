<template>
  <section class='grammar-component'>
    <div class='previous'>
      <p>Previous Question</p>
      <button v-on:click='previousQuestion'>Back button</button>
    </div>
    <div class='content'>
      <p>Correct the error(s) in the following sentence:</p>
      <h2>{{ currentQuestion.text }}</h2>
      <div class='grammar-input'>
        <input v-model='userInput' type='text'/>
        <button v-on:click='checkGrammar'>Submit</button>
        <p v-if='userInput' class='user-revisions'>Your revisions: {{ userInput }}</p>
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
      questions: [
        {
          "created_date": "Mon, 06 Jan 2020 14:52:54 GMT",
          "id": 1,
          "level": "beginner",
          "text": "Have you make dinner yet?",
          "updated_date": "Mon, 06 Jan 2020 14:52:54 GMT"
        },
        {
          "created_date": "Mon, 06 Jan 2020 15:07:57 GMT",
          "id": 2,
          "level": "beginner",
          "text": "How many biscuits is there in the tin?",
          "updated_date": "Mon, 06 Jan 2020 15:07:57 GMT"
        },
        {
          "created_date": "Mon, 06 Jan 2020 15:07:57 GMT",
          "id": 3,
          "level": "beginner",
          "text": "A car is fast than a bicycle.",
          "updated_date": "Mon, 06 Jan 2020 15:07:57 GMT"
        }
      ],
      currentQuestion: '',
      userInput: '',
      correctedGrammar: '',
    };
  },
  methods: {
    checkGrammar: function() {
      if(this.userInput) {
        reviewGrammar(this.userInput)
          .then(data => this.correctedGrammar = data);
      }
      this.userInput = '';
    },
    nextQuestion: function() {
      const i = this.questions.indexOf(this.currentQuestion);
      if(i !== this.questions.length - 1) {
        this.currentQuestion = this.questions[i + 1];
      } 
      this.userInput = '';
    },
    previousQuestion: function() {
      const i = this.questions.indexOf(this.currentQuestion);
      if(i !== 0) {
        this.currentQuestion = this.questions[i - 1];
      }
      this.userInput = '';
    }
  },
  mounted() {
    getQuestions()
      .then(res => this.questions = res)
      .catch(error => console.error(error));
    this.currentQuestion = this.questions[0];
  }
};
</script>

<style>
  .grammar-component {
    display: flex;
    height: 100vh;
  }

  .previous {
    align-items: center;
    border: 1px solid black;
    border-right: none;
    display: flex !important;
    flex-direction: column !important;
    justify-content: flex-end !important;
    padding-bottom: 20px;
    width: 25% !important;
  }

  .content {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px !important;
    width: 50% !important;
  }

  .grammar-input {
    width: 90%;
  }

  .user-revisions {
    font-size: 1.5em;
    padding: 15px;
  }

  .next {
    align-items: center;
    border: 1px solid black;
    border-left: none;
    display: flex !important;
    flex-direction: column !important;
    justify-content: flex-end !important;
    padding-bottom: 20px;
    width: 25% !important;
  }

  input {
    border-radius: 5px;
    display: block;
    font-size: .9em;
    height: 40px;
    margin: 10px;
    padding-left: 5px;
    width: 100%;
  }

  button {
    background-color: #7957d5;
    border-color: transparent;
    border-radius: 5px;
    color: white;
    font-size: .9em;
    height: 40px;
    margin: 10px;
    width: 150px;
  }

  button:hover {
    background-color: #714CD2;
    cursor: pointer;
  }
</style>
