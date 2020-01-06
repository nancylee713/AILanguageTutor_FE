<template>
  <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src='../assets/teacher.png'
                    alt="Teacher logo"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                <router-link to='/'>
                    Home
                </router-link>
            </b-navbar-item>
            <b-navbar-item href="#">
                <router-link to='/grammar'>
                    Grammar Tests
                </router-link>
            </b-navbar-item>
            <b-navbar-item href="#">
                <router-link to='/pronunciation'>
                    Pronunciation Tests
                </router-link>
            </b-navbar-item>
            <b-navbar-dropdown label="Account">
                <b-navbar-item href="#">
                    View User Account
                </b-navbar-item>
                <b-navbar-item href="#">
                    Log Out
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
