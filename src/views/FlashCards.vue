<template>
  <section class='flashcard-component'>
    <div class='previous-card'>
      <button v-on:click='previousFlashCard'>Previous Card</button>
    </div>
    <div class='cards-container'>
      <div class='card'>
        <h3 class='card-title'>{{flashcards[cardIndex].entries[0].entry}}</h3>
        <p class='card-def'>Definition: {{flashcards[cardIndex].entries[0].lexemes[0].senses[0].definition}}</p>
        <p class='card-pos'>Part of Speech: {{flashcards[cardIndex].entries[0].interpretations[0].partOfSpeech}}</p>
        <audio controls>
        <source v-bind:src='audioSource'>
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
import Cards from '@/components/Cards.vue';
import vocabWords from '../data/mockVocab';

export default {
  name: 'flashcards',
  components: {
      Cards,
  },
  data() {
    return {
      flashcards: [],
      cardIndex: 5,
      audioSource: '',
      isOpen: false
    }
  },
  methods: {
    getDefinition(word) {
      return getFlashCard(word)
    },
    nextFlashCard() {
      if (this.cardIndex < this.flashcards.length + 1) {
        this.cardIndex++
        this.retrieveAudio()
      }
    },
    previousFlashCard() {
      if (this.cardIndex > 0) {
        this.cardIndex--
        this.retrieveAudio()
      }
    },
    retrieveAudio() {
      this.audioSource = this.flashcards[this.cardIndex].entries[0].pronunciations[0].audio.url;
    },
    toggle: function(){
      this.isOpen = !this.isOpen
    } 

  },
  mounted(){
    vocabWords.map(word => {
      this.getDefinition(word)
      .then(response => this.flashcards.push(response))
    })
  }
};
</script>

<style lang='scss'>
.flashcard-component {
  display: flex;
  height: 80vh;
  justify-content: space-evenly;

  .cards-container {
    width: 60%;
    border: solid 2px black;
    border-radius: 4px;
    margin-top: 10px;
    .card {
      .card-title {
        font-size: 50px;
        font-weight: bold;
      }
      .card-def {

      }
      .card-pos {
        
      }
    }
  }
  .previous-card,
  .next-card{
    margin: auto;
  }
}


</style>
