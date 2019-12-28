<template>
  <section class='pronunciation-component'>
    <div class='previous'>
      <p>Previous Question</p>
      <button>Back button</button>
      <p>Question number: {{ qnum }}</p>
    </div>
    <div class='content'>
      <div class='pronunciation-content'>
        <!-- <p>{{ prompt }}</p> -->
      </div>
      <button>Record</button>
      <p>Pronounce the sentence</p>
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
  //   prompt: '',
  // }
};
</script>

<style>
  .pronunciation-content {
    border: 1px solid #000;
  }
</style>
