<template>
  <div class="hello">{{ msg }}</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    width: 200px;
    height: 200px;
    background-color: purple;
    border: 1px solid #ccc;
  }
</style>
