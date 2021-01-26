<template>
  <div class="header">
    <p @click="handlerLogo">Logo</p>
  </div>
</template>
<script>
export default {
  methods: {
    handlerLogo() {
      this.$router.push('/');
    },
  },
};
</script>
