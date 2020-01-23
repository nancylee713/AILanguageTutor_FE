<template>
    <form @submit.prevent="handleSubmit" class='signup-form'>
        <b-field label="Name">
            <b-input class='input-field' required v-model="account.name" value="" maxlength="40" placeholder="Please enter your name"></b-input>
        </b-field>

        <b-field label="Email">
            <b-input class='input-field' type="email"
                required
                placeholder="Please enter your email"
                v-model="account.email"
                value=""
                maxlength="40">
            </b-input>
        </b-field>
        <b-field label="Username">
            <b-input class='input-field' required value="" placeholder="Please enter your username" v-model="account.username" maxlength="20"></b-input>
        </b-field>

        <b-field label="Password">
            <b-input class='input-field' required value="" v-model="account.password" type="password" maxlength="30" placeholder="Please enter your password"></b-input>
        </b-field>
        <button type="submit" outlined>Submit</button>
    </form>
</template>

<script>

import {createAccount} from '../api/apiCalls.js'

export default {
  name: 'sign up form',
  data() {
    return {
        account: {
            name: null,
            username: null,
            email: null,
            password: null
        }
    }
  },
  methods: {
    handleSubmit(){
        console.log({...this.account})
        createAccount({...this.account})
        .catch(err => console.error(err))
    }
},
  mounted() {

  }
}

</script>

<style lang='scss'>
    .signup-form {
        margin-top: 6em;
    }
    .input-field {
        width: 70%;
        margin: 0 auto
    }
</style>
