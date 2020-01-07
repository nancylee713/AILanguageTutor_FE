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
  methods: {
    getDefinition: function (word) {
      getFlashCard(word)
      .then(data => console.log(data))
      .catch(error => console.error(error))
    }
  },
  mounted(){
    console.log(vocabWords)
    return vocabWords.map(word => {
      let data = this.getDefinition(word);
      console.log(data)
      return(
        <Cards cardName='dog' cardDefinition='dog'/>
      )
    })
  }
};
</script>
