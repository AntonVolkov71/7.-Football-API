<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from './components/app/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style>
@import "~materialize-css/dist/css/materialize.min.css";
</style>
