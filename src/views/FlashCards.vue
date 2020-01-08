<template>
  <div class="flash-cards">
    <p>cards!!!!</p>
    <Cards cardName='dog' cardDefinition='definition' />
  </div>
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
      flashcards: []
    }
  },
  methods: {
    async getDefinition (word) {
      return await getFlashCard(word)
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
