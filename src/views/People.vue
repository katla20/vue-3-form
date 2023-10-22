<template>
  <div>
    <ul>
      <li
        v-for="person in people"
        :key="person.id"
        v-bind:class="{
          even: person.isEven,
          odd: !person.isEven,
          broken: person.isEven === undefined,
        }"
      >
        {{ person.name }}
        <span v-if="person.promoted"> (Promoted)</span>
        <span v-else> (Standard)</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'People',
  data: function () {
    return {
      people: [
        { id: 1, name: 'John', isEven: false, promoted: true },
        { id: 2, name: 'Jane', isEven: true, promoted: false },
        { id: 3, name: 'Susan', isEven: false, promoted: true },
        { id: 4, name: 'Mark', isEven: true, promoted: false },
        { id: 5, name: 'Dan', isEven: false, promoted: false },
        { id: 6, name: 'Chloe', isEven: true, promoted: false },
        { id: 7, name: 'Peter', isEven: undefined, promoted: true },
        { id: 8, name: 'Andy', isEven: true, promoted: false },
      ],
    };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
.even {
  color: navy;
}

.odd {
  color: blue;
}

.broken {
  color: red;
}
</style>
