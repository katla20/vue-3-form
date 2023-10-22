<template>
  <form>
    <input type="text" v-model="name" />
    <input type="Number" v-model="count" />
  </form>
  <hr />
  <p>Name: {{ upperCaseName }}</p>
  <p>Value: {{ count }}</p>
  <hr />
  <button v-on:click="calculate">Calculate</button>
</template>

<script>
export default {
  name: 'Calculation',
  data: function () {
    return {
      name: '',
      count: 0,
    };
  },
  computed: {
    upperCaseName: function () {
      return this.name.toUpperCase();
    },
  },
  methods: {
    calculate: function () {
      this.count > 5 ? (this.count *= 10) : (this.count = +this.count + 10);
      return this.count;
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

input {
  margin: 10px auto;
  width: 150px;
}
</style>
