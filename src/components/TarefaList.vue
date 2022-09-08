<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="t in tasks" :key="t.id">{{ t }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    tasks: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
