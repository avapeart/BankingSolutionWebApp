<style lang="scss" src="./login.scss"></style>
<script lang="ts" src="./login.ts"></script>

<template>
  <div class="login-view">
    <div class="firstcontainer">
    <img src='../../assets/logoOnly.jpg' id='loginlogo'>
    <br><br>
    <h1>Welcome! 
      Please enter your credentials to continue.
    </h1>
    <br>
  
<form  @submit="formSubmit" class="login">


  <div class="container">
    
    
      <label for="email"><b>E-mail</b></label>
      <input type="email" placeholder="Enter e-mail address" v-model="email" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" v-model="password" required>
          
      <button type="submit">Login</button>
     
  </div>
  <div class="container" >
    <span class="register">If you don't have an account <a href="#/register">OPEN ONE HERE!</a></span>
  </div>
</form> 
    </div> 
  </div>
</template>

 