<template>
  <section class='flashcard-component'>
    <div class='previous-card'>
      <button v-on:click='previousFlashCard'>Previous Card</button>
    </div>
    <div class='cards-container'>
      <div class='card'>
        <h3 class='card-title'>{{currentCard.word}}</h3>
        <p class='card-def'>Definition: {{currentCard.definition}}</p>
        <p class='card-pos'>Part of Speech: {{currentCard.pos}}</p>
        <audio controls :key='currentCard.audio' >
        <source v-bind:src='currentCard.audio'>
        </audio>  
      </div>
    </div>
    <div class='next-card'>
      <button v-on:click='nextFlashCard'>Next Card</button>
    </div>
  </section>
</template>

<script>
import { getFlashCard } from '@/api/apiCalls';
import vocabWords from '../data/mockVocab';

export default {
  name: 'flashcards',
  data() {
    return {
      flashcards: [],
      cardIndex: 0,
      currentCard: {}
    }
  },
  methods: {
    getDefinition(word) {
      return getFlashCard(word)
    },
    nextFlashCard() {
      console.log(this.cardIndex)
      if (this.cardIndex < this.flashcards.length - 1) {
        this.cardIndex++
        // this.retrieveAudio()
        this.currentCard = this.flashcards[this.cardIndex]
      }
    },
    previousFlashCard() {
      if (this.cardIndex > 0) {
        this.cardIndex--
        this.currentCard = this.flashcards[this.cardIndex]
      }
    },

  },
  mounted(){
    vocabWords.map(word => {
      this.getDefinition(word)
      .then(response => this.flashcards.push(response))
      .then(res => this.currentCard=this.flashcards[0])
    })
  }
};
</script>

<style lang='scss'>
.flashcard-component {
  display: flex;
  height: 90vh;
  justify-content: space-evenly;

  .cards-container {
    width: 60%;
    border: solid 2px black;
    border-radius: 4px;
    margin: 8%;
    .card {
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 2%;
      justify-content: space-evenly;

      .card-title {
        font-size: 3em;
        font-weight: bold;
      }
      .card-def {
        font-size: 1.5em;
        font-weight: 400;
      }
      .card-pos {
        font-size: 1.8em;
      }
      audio {
        align-self: center;
      }
    }
  }
  .previous-card,
  .next-card{
    margin: auto;
  }
}


</style>
