<template>
  <button @click="increment">
    Count is: {{ state.count }}, double is: {{ state.double }}
  </button>
  <div id="text"></div>
  <hr>
  <button @click="add">
    count is {{ count }}
  </button>

</template>

<script>

import { reactive, computed, watchEffect, ref } from 'vue'
export default {
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    })

    const count = ref(0)

    function add() {
      count.value++
    }

    function increment() {
      state.count++
    }

    watchEffect(() => {
      localStorage.setItem('count', state.count)
    })

    return {
      state,
      increment,
      count,
      add
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
