<template>
    <form v-if="this.account.email" @submit.prevent="handleSubmit" class='signup-form'>
        <b-field label="Name">
            <b-input class='input-field' required v-model="account.name" value="account.name" maxlength="40" placeholder="Please enter your name"></b-input>
        </b-field>

        <b-field label="Email">
            <b-input class='input-field' type="email"
                required
                placeholder="Please enter your email"
                v-model="account.email"
                value="account.email"
                maxlength="40">
            </b-input>
        </b-field>
        <b-field label="Proficiency" for="proficiency">
            <b-select class="input-field select" id="proficiency" required value="account.proficiency" placeholder="Proficiency level" v-model="account.proficiency">
                <option value="Beginner" defaultValue>Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
            </b-select>
        </b-field>
        <b-field label="Age">
            <b-input class='input-field' required value="account.age" type="number" placeholder="Please enter your age" v-model="account.age" min="16" max="105"></b-input>
        </b-field>
        <button type="submit" outlined>Update Account</button>
    </form>
    <div v-else="!this.account.email" class="no-user-div">
      <h3> Please
        <router-link to='/login'>
                        Login
        </router-link>
      or
        <router-link to='/create_user'>
                        Create an account
        </router-link>
      to update your account. </h3>
    </div>
</template>

<script>

import {createAccount, createUserProfile} from '../api/apiCalls.js'
import { mapState } from 'vuex'

export default {
  name: 'account_overview',
  data() {
    return {
        account: {
        ...this.$store.state.user
      }
    }
  },
  methods: {
    handleSubmit(e){
        createAccount({...this.account})
        .then(res => createUserProfile({...res, ...this.account}))
        .then(res => {
            e.target.reset()
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
    .no-user-div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50vh;
    }
    h3 {
      font-size: 2em;

    }
    .input-field {
        width: 70%;
        margin: 0 auto
    }
    div.control.input-field.select::after {
        display: none;
    }
</style>
