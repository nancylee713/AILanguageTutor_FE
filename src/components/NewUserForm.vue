<template>
    <section class='signup-form'>
        <b-field label="Name">
            <b-input class='input-field' value=""></b-input>
        </b-field>

        <b-field label="Email">
            <b-input class='input-field' type="email"
                value=""
                maxlength="40">
            </b-input>
        </b-field>
        <b-field label="Username">
            <b-input class='input-field' value="" maxlength="20"></b-input>
        </b-field>

        <b-field label="Password">
            <b-input class='input-field' value="" type="password" maxlength="30"></b-input>
        </b-field>
        <b-button type="is-primary" outlined>Submit</b-button>
    </section>
</template>

<style lang='scss'>
    .signup-form {
        margin-top: 6em;
    }
    .input-field {
        width: 70%;
        margin: 0 auto
    }
</style>
