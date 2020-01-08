<template>
  <section class='flashcard-component'>
    <div class='previous-card'>
      <p>Previous Question</p>
      <button v-on:click='previousFlashCard'>Previous Card</button>
    </div>
    <div class='cards-container'>
    </div>
    <div class='next-card'>
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
      currentCard: 0
    }
  },
  methods: {
    getDefinition(word) {
      return getFlashCard(word)
    },
    nextFlashCard() {
      
    } 

  },
  mounted(){
    vocabWords.map(word => {
      this.getDefinition(word)
      .then(response => this.flashcards.push(response))
      console.log(this.flashcards)
    })
  }
};
</script>
