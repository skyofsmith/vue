<template>
  <div class="hello">
    <button @click="add">+</button>
    {{ state.count }}
    <br>
    {{ state.double }}
  </div>
</template>

<script>
import { reactive, computed, watchEffect, onMounted } from 'vue'
export default {
  name: 'HelloWorld',
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    });
    function add() {
      state.count++
    }
    watchEffect(() => {
      debugger
      document.title = `count is ${state.count}`
    });

    onMounted(() => {
      console.log('mounted')
    });

    return {
      state, add
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
