<template>
  <div class="home">

    <div class='head'>
      <h1>Welcome to Language Learner</h1>
      <h2 class='welcome'>Welcome to Language Learner where we are commited to assisting your language learning needs!</h2>
      <h2 class='choose'>Choose your language practice path.</h2>
    </div>
    
    <section class='grammar-section'>
      <img class='grammar-icon'src='../assets/english.png' />
      <p>Practice English phrase grammar with correction activities.</p>
    </section>
    <router-link to='grammar'>
      <button>Practice Grammar</button>
    </router-link>
    <section class='flashcards-section'>
      <img class='flashcards-icon'src='../assets/inspection.png' />
      <p>Train yourself on English verbiage, definitions, and usage with term flashcards.</p>
    </section>
    <router-link to='flashcards'>
      <button>Practice with Flashcards</button>    
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
};
import AudioRecorder from 'vue-audio-recorder'
</script>

<style lang='scss'>
  h1 {
    font-size: 2em;
    margin: 40px;
  }
  .welcome {
    font-size: 20px; 
  }
  img {
        width: 100px;
        margin: 0 px;
      }  
  .home {
    align-items: center;
    .choose {
      margin: 5%;
      font-size: 30px;
      font-weight: 700;
    }

    .grammar-section {
      display: flex;
      text-align: center;
      align-items: center;
      margin:  25px auto;
      width: 40%;
    }
    
    .flashcards-section {
      display: flex;
      align-items: center;
      margin:  30px auto;
      width: 40%;
    }
    button {
      margin: 3px;
      height: 50px;
    }
  }
</style>
