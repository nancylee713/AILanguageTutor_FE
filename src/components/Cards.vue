<template>
  <div class='cards-component'>
      <h2>{{cardName}}</h2>
  </div>
</template>

<script>
export default {
    name: 'Cards',
    props: {
        cardName: String,
        cardDefinition: String,
    },
};
</script>

<style>
.cards-component {
    height: 30vh;
    width: 40%;
}
</style>
