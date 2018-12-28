<template>
  <div class="hello">
    {{msg}}
  </div>
</template>

<script>
import axios from "axios";
window.console.log(axios);

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted () {
    axios.get('/api/a').then((ret) => {
      window.console.log(ret);
    }, err => {
      window.console.log(err);
    })
    
    axios.post('/api/b').then((ret) => {
      window.console.log(ret);
    }, err => {
      window.console.log(err);
    })
  }
}
</script>

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
