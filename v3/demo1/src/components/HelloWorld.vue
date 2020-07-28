<template>
  <div class="hello">
    <div class="test">
      <button @click="add">+</button>
      {{ state.count }}
      <br>
      {{ state.double }}
    </div>
    <div class="dynamic-attr">
      <input type="text" @[state.eventName]="func">
      <select v-model="state.eventName">
        <option :value="o.value" v-for="o in eventOptions" :key="o.value">{{ o.label }}</option>
      </select>
    </div>
    <div class="child-comp">
      <child @custom-event="handleCustomEvent" />
    </div>
  </div>
</template>

<script>
import { reactive, computed, watchEffect, onMounted } from 'vue'
import Child from './Child'
export default {
  name: 'HelloWorld',
  components: {
    Child
  },
  setup() {
    const state = reactive({
      eventName: 'click',
      count: 0,
      double: computed(() => state.count * 2)
    });
    function add() {
      state.count++
    }
    function func() {
      console.log(`${state.eventName} event triggered!`)
    }
    function handleCustomEvent({ msg }) {
      console.log('HelloWorld received! it\'s ' + msg);
    }
    watchEffect(() => {
      document.title = `count is ${state.count}`
    });

    onMounted(() => {
      console.log('mounted')
    });

    return {
      state,
      add,
      func,
      handleCustomEvent,
      eventOptions: [
        {
          label: 'click',
          value: 'click'
        },
        {
          label: 'focus',
          value: 'focus'
        },
        {
          label: 'blur',
          value: 'blur'
        },
        {
          label: 'doubleclick',
          value: 'dblclick'
        }
      ],
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
