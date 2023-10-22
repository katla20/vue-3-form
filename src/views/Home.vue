<template>
  <div class="home">
    <img alt="Vue logo" src="https://vuejs.org/images/logo.png" />
    <HelloWorld msg="Welcome to Learn Vue" />
    <MyName />
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
import MyName from '../components/MyName.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    MyName,
  },
};
</script>

<style scoped>
img {
  height: 150px;
}
</style>
