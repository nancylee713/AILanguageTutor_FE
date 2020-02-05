<template>
    <form @submit.prevent="handleSubmit" class='login-form'>
        <b-field label="Email">
            <b-input class='input-field' type="email"
                required
                placeholder="Please enter your email"
                v-model="account.email"
                value=""
                maxlength="40">
            </b-input>
        </b-field>
        <b-field label="Password">
            <b-input class='input-field' required value="" v-model="account.password" type="password" maxlength="30" placeholder="Please enter your password"></b-input>
        </b-field>
        <button type="submit" outlined>Log in</button>
    </form>
</template>

<script>

import {logUserIn} from '../api/apiCalls.js'
import { mapState } from 'vuex'


export default {
  name: 'LoginForm',
  data() {
    return {
        account: {
            email: null,
            password: null
        }
    }
  },
  methods: {
    handleSubmit(e){
        logUserIn({...this.account})
        .then(res => {
            this.$store.dispatch('setUser', res)
            e.target.reset()
            })
        .catch(err => console.error(err))
    }
},
  mounted() {

  }
}

</script>

<style lang='scss'>
    .login-form {
        margin-top: 6em;
    }
    .input-field {
        width: 70%;
        margin: 0 auto
    }
</style>
