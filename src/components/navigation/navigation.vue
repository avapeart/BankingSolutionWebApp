<style lang="scss" src="./navigation.scss"></style>
<script lang="ts" src="./navigation.ts"></script>
<template>
  <div class="navigation"> 
    <nav>
      <router-link to="/dashboard" id="home"><b>Home</b></router-link>
      <router-link to="/transfer" id="transfer"><b>Transfer</b></router-link>
    </nav>
    <!-- <select @change="$store.dispatch('app/theme', $event.target.value)">
      <option value="default" selected>Default Theme</option>
      <option value="dark">Dark Theme</option>
    </select> -->
  </div>
</template>