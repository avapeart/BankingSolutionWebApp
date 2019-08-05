<style lang="scss" src="./register.scss"></style>
<script lang="ts" src="./register.ts"></script>

<template>
    <div class="register-view">
        <h1>Open an Account</h1>
        <p><b>Fill in all required fields and submit this form to open an account</b></p>
        <form @submit="formSubmit" class="register">
        <div class="registration_container">
            <label for="accType"><b>Account Type</b></label>
            <br><br>
              <select name="accType">
                    <option value="checkings">Checkings</option>
                    <option value="savings">Savings</option>      
             </select>
            <br><br>
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
            <br>
             <span class="login">If you already have an account <a href="#/login">LOGIN HERE!</a></span>
        </div>
        </form>
    </div>
</template>


   