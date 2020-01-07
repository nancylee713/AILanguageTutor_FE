<template>
  <div class="flash-cards">
    <p>cards!!!!</p>
    <Cards cardName='dog' cardDefinition='definition' />
  </div>
</template>

<script>
import { getFlashCard } from '@/api/apiCalls';
import Cards from '@/components/Cards.vue';

export default {
  name: 'flashcards',
  components: {
      Cards,
  },
};
</script>
