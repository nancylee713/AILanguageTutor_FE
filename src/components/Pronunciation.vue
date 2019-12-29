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
        <p>Here is a sample prompt that will have to be changed later</p>
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
  //   prompt: String,
  // }
};
</script>

<style>
  .pronunciation-component {
    display: flex;
  }

  .previous {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    width: 33%;
  }

  .content {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 33%;
  }

  .next {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 33%;
  }
</style>
