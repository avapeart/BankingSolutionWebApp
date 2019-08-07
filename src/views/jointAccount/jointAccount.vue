<style lang="scss" src="./jointAccount.scss"></style>
<script lang="ts" src="./jointAccount.ts"></script>

<template>
    <div class="jointAccount-view">
        <h1>Create a Joint Account</h1>
        <p><b>Fill in all required fields and submit this form to open add someone to your account</b></p>
        <form @submit="formSubmit" class="jointAccount">
        <div class="jointAccount_container">
            <label for="email"><b>E-mail</b></label>
            <input type="email" placeholder="Enter your e-mail address" v-model="email" required>

            <label for="phonenumber"><b>Phone Number</b></label>
            <input type="number" placeholder="Enter your phone number" v-model="phonenumber" required>

            <label for="trn"><b>TRN</b></label>
            <input type="number" placeholder="Enter your TRN number" v-model="trn" required>
            
            <label for="username"><b>Name</b></label>
            <input type="text" placeholder="Enter your full name" v-model="username" required>

            <label for="password"><b>Password</b></label>
            <input type="password" placeholder="Enter your account password" v-model="password" required>

            <label for="psw"><b>Re-Enter Password</b></label>
            <input type="password" placeholder="Enter your account password again" v-model="password" required>

            <button type="submit">Create Account</button>
        </div>
        </form>
    </div>
</template>


   