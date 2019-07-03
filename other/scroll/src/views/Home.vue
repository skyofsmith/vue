<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <A msg="Welcome to Your Vue.js App" />
    <br>
    <B msg="B"></B>
  </div>
</template>

<script>
// @ is an alias to /src
import A from "@/components/A.vue";
import B from "@/components/B.vue";

export default {
  name: "home",
  components: {
    A,
    B
  }
};
</script>
