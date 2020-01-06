<template>
    <section>
        <b-field label="Name">
            <b-input value=""></b-input>
        </b-field>

        <b-field label="Email">
            <b-input type="email"
                value=""
                maxlength="40">
            </b-input>
        </b-field>
        <b-field label="Username">
            <b-input value="username here" maxlength="20"></b-input>
        </b-field>

        <b-field label="Password">
            <b-input value="password here" type="password" maxlength="30"></b-input>
        </b-field>

        <b-field label="Subject">
            <b-select placeholder="Select a subject">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </b-select>
        </b-field>
        <b-button type="is-primary" outlined>Submit</b-button>
    </section>
</template>
