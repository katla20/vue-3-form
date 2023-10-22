<template>
  <div>
    <h1>Breweries</h1>

    <form v-on:submit.prevent="onSearch">
      <label>Search for breweries:</label>
      <input type="text" v-model="searchTerm" />

      <label>Search by:</label>
      <select v-model="searchBy">
        <option v-for="option in searchByOptions" v-bind:value="option.value">
          {{ option.name }}
        </option>
      </select>

      <button :disabled="isInvalid">Search</button>
    </form>

    <p v-if="loading">Loading...</p>

    <section v-else>
      <p v-if="breweries.length === 0">No results found</p>
      <article v-for="brewery in breweries">
        <h2>{{ brewery.name }}</h2>
        <p>{{ brewery.street }}, {{ brewery.city }} - {{ brewery.state }}</p>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BreweriesView',
  data: function () {
    return {
      searchTerm: '',
      searchBy: '',
      searchByOptions: [
        { name: 'City', value: 'by_city' },
        { name: 'State', value: 'by_state' },
        { name: 'Postal', value: 'by_postal' },
      ],
      breweries: [],
      loading: false,
    };
  },
  computed: {
    isInvalid() {
      const valid = !!this.searchTerm.trim() && !!this.searchBy;
      return !valid;
    },
  },
  methods: {
    onSearch: async function () {
      this.loading = true;

      const term = this.searchTerm;
      term.replaceAll(' ', '_');
      const type = this.searchBy;
      const base = 'https://api.openbrewerydb.org/breweries';
      const url = `${base}?${type}=${term}`;

      const result = await this.$http.get(url);

      this.loading = false;
      this.breweries = result?.data || [];
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

input,
select,
button {
  width: 150px;
  margin: 0 auto;
}

label {
  margin-bottom: 10px;
}

button {
  margin: 20px auto;
}

section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

article {
  border-radius: 10px;
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 160px;
  padding: 5px;
  margin: 5px;
}

h2 {
  font-size: 18px;
}
</style>
