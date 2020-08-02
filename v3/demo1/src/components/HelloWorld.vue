<template>
  <div class="hello">
    <button @click="add">+</button>
    {{ state.count }}
    <br>
    {{ state.double }}
    <hr>
    <input type="text" v-model="state.obj.name">
    <input type="text" v-model="state.obj.age">
    <Child :person="state.obj"/>
  </div>
</template>

<script>
import Child from './Child'
import { reactive, computed, watchEffect, onActivated,onBeforeUpdate, onUpdated, onMounted, onBeforeMount, onUnmounted, onBeforeUnmount } from 'vue'
export default {
  name: 'HelloWorld',
  components: {
    Child
  },
  setup() {
    const state = reactive({
      count: 0,
      obj: {
        name: 'sam',
        age: 12
      },
      double: computed(() => state.count * 2)
    });
    function add() {
      state.count++
    }
    watchEffect(() => {
      document.title = `count is ${state.count}`
    });

    onActivated(() => {
      console.log('onActivated')
    });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    });
    onUpdated(() => {
      console.log('onUpdated')
    });

    onBeforeMount(() => {
      console.log('onBeforeMount')
    });
    onMounted(() => {
      console.log('mounted')
    });
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    });
    onUnmounted(() => {
      console.log('onUnmounted')
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
