<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" />
    <h1 class="title">{{ error.statusCode }}</h1>
    <h2>{{ error.message }}</h2>
    <nuxt-link class="button" to="/" v-if="error.statusCode === 404">
      Homepage
    </nuxt-link>
  </section>
</template>
<script>
  export default {
    props: ['error']
  };
</script>
<style>
  .title
  {
    margin-top: 15px;
    font-size: 5em;
  }

  .info
  {
    font-weight: 300;
    color: #9aabb1;
    margin: 0;
  }

  .button
  {
    margin-top: 50px;
  }
</style>
