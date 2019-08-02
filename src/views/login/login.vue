<style lang="scss" src="./login.scss"></style>
<script lang="ts" src="./login.ts"></script>

<template>
  <div class="login-view">
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
</template>

    
<script>
    export default {
        mounted() {
            // print('Component mounted.');
        },
        data() {
            return {
              email: '',
              password: '',
              output: '',
            };
        },
        methods: {
            formSubmit(e) {
                e.preventDefault();
                const currentObj = this;
                this.axios.post('http://localhost:4003/api/login', {
                    email: this.email,
                    password: this.password,
                })
                .then( ( response ) => {
                    localStorage.setItem('token', response.data.token);
                    currentObj.output = response.data;
                })
                .catch( ( error ) => {
                    currentObj.output = error;
                });
            },
        },
    };
</script>