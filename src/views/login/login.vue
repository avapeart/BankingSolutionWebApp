<style lang="scss" src="./login.scss"></style>
<script lang="ts" src="./login.ts"></script>

<template>
  <div class="login-view">
    <h1>Welcome! 
      Please enter your credentials to continue.
    </h1>
    <br>
  
<form action="login" class="login">


  <div class="container">
    
      <label for="email"><b>E-mail</b></label>
      <input type="email" placeholder="Enter e-mail address" name="email" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>
          
      <button type="submit">Login</button>
  
  </div>
  <div class="container" >
    <span class="register">If you don't have an account <a href="#/register">OPEN ONE HERE!</a></span>
  </div>
</form>  
  </div>
</template>
