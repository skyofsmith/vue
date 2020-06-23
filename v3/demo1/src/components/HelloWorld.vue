<template>
  <div class="hello">
    {{ state.count }}
    <button @click="add">+</button>
  </div>
</template>

<script>
import { reactive, watchEffect  } from 'vue'
export default {
  name: 'HelloWorld',
  setup() {
    const state = reactive({
      count: 0,
    })
    function add() {
      state.count++
    }
    watchEffect(() => {
      document.body.innerHTML = `count is ${state.count}`
    })
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
