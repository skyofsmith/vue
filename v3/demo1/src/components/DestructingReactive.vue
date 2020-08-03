<template>
  <div class="destructing-reactive">
    <input type="text" v-model="nameSam" >
    {{ nameSam }}
    <input type="checkbox" v-model="genderSam" >
    {{ genderSam }}
    <br>
    <input type="text" v-model="nameTom" >
    {{ nameTom }}
    <input type="checkbox" v-model="genderTom" >
    {{ genderTom }}
    <br>
  </div>
</template>

<script>
import { reactive, ref, watchEffect } from 'vue'
export default {
  name: 'DestructingReactive',
  setup() {
    const person = reactive({
      name: 'zachary'
    })

    const { name } = person

    watchEffect(() => {
      console.log(name);
    })
    
    watchEffect(() => {
      console.log(person.name);
    })

    const gender = ref(false)

    return {
      nameSam: person.name,
      genderSam: gender,
      genderTom: gender,
      nameTom: person.name
    }
  }
}
</script>

<style scoped>
  .destructing-reactive {

  }
</style>