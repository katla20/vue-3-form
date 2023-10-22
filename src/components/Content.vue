<template>
  <div>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    text: String,
  },
};
</script>
