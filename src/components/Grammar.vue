<template>
  <section class='grammar-component'>
    <div class='previous'>
      <p>Previous Question</p>
      <button>Back button</button>
      <p>Question number: {{ qnum }}</p>
    </div>
    <div class='content'>
      <button>Play</button>
      <p>Type out the sentence</p>
      <div class='grammar-input'>
        <input type='text'/>
        <button>Submit</button>
      </div>
    </div>
    <div class='next'>
      <p>Next Question</p>
      <button>Next Button</button>
    </div>
  </section>
</template>

<script>
export default {
  // data: {
  //   qnum: String,
  // },
  // methods: {
  //   next: function() {

  //   },
  //   previous: function() {

  //   },
  //   checkGrammar: function() {

  //   },
  // }
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
