<template>
  <b-navbar class='navbar'>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <div class='logo'>
                    <h1>Language</h1>
                    <h1>Learner</h1>
                </div>
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item class='items' href="#">
                <router-link to='/'>
                    Home
                </router-link>
            </b-navbar-item>
            <b-navbar-item class='items' href="#">
                <router-link to='/grammar'>
                    Grammar Tests
                </router-link>
            </b-navbar-item>
            <b-navbar-item class='items' href="#">
                <router-link to='/flashcards'>
                    Flash Cards
                </router-link>
            </b-navbar-item>
            <b-navbar-dropdown class='items' label="Account">
                <b-navbar-item href="#">
                    View Account
                </b-navbar-item>
                <b-navbar-item href="#">
                    LogOut
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <router-link to='/create_user'>
                        <a class="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                    </router-link>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>

export default {
  name: 'NavBar',
  props: {
  },
};
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');

.navbar {
    height: 10vh;
    background: rgb(202, 188, 216);
    font-weight: 500;
    .logo {
        margin: .4em 1.5em 0 1.5em;
        h1 {
            font-size: 30px;
            font-weight: 600;
            font-family: 'Rubik', sans-serif;
            margin: -15px;
        }
    }
    .items {
        font-size: 20px;
    }
}

.buttons {
    margin: 0 10px;
}
</style>
