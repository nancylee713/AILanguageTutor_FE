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
        <b-field label="Proficiency" for="proficiency">
            <b-select class="input-field select" id="proficiency" required value="" placeholder="Proficiency level" v-model="account.proficiency">
                <option value="Beginner" defaultValue>Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
            </b-select>
        </b-field>
        <b-field label="Age">
            <b-input class='input-field' required value="" type="number" placeholder="Please enter your age" v-model="account.age" min="16" max="105"></b-input>
        </b-field>
        <b-field label="Username">
            <b-input class='input-field' required value="" placeholder="Please enter your username" v-model="account.username" maxlength="20"></b-input>
        </b-field>

        <b-field label="Password">
            <b-input class='input-field' required value="" v-model="account.password" type="password" maxlength="30" placeholder="Please enter your password"></b-input>
        </b-field>
        <button type="submit" outlined>Sign Up</button>
    </form>
</template>

<script>

import {createAccount, createUserProfile} from '../api/apiCalls.js'
import { mapState } from 'vuex'

export default {
  name: 'signUpForm',
  data() {
    return {
        account: {
            name: null,
            username: null,
            age: null,
            email: null,
            password: null,
            proficiency: null
        }
    }
  },
  methods: {
    handleSubmit(e){
        createAccount({...this.account})
        .then(res => createUserProfile({...res, ...this.account}))
        .then(res => {
            e.target.reset()
            console.log('new user res --->', res)
            this.$store.dispatch('setUser', res)
        })
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
    div.control.input-field.select::after {
        display: none;
    }
</style>
