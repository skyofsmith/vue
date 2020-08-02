<template>
  <div>
    {{msg}}
    <input type="text" v-model="msg" >
    <button @click="clickEvent">emit</button>
    {{ person }}
  </div>
</template>

<script>
import { reactive
// , computed, watchEffect, onMounted 
} from 'vue'

export default {
  name: 'Child',
  props: {
    person: {
      type: Object,
      default: () => ({})
    }
  },
  emits: {
    'custom-event': ({msg}) => {
      return msg && msg.length
    }
  },
  setup() {
    function clickEvent () {
      this.$emit('custom-event', { msg: state.msg })
    }
    const state = reactive({
      msg: ''
    })
    return {
      ...state,
      clickEvent
    }
  }
}
</script>

<style scoped>

</style>