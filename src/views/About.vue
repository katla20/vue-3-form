<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Content text="Here is some content"></Content>
  </div>
</template>

<script>
import Content from '../components/Content.vue';

export default {
  components: {
    Content,
  },
};
</script>
