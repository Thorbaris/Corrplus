<template>
  <MainNavbar/>
  <router-view/>

  
</template>

<script>

import MainNavbar from './components/Navbars/MainNavbar.vue';


export default {
  name: 'App',
  components: {
    MainNavbar,  
  }
}

</script>

<style>

</style>
