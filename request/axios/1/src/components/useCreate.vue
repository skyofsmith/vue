<template>
  <div class="hello">
    {{msg}}
  </div>
</template>

<script>
import axios from "axios";

axios.defaults.headers.common['Authorization'] = 'skyofsmith';
axios.defaults.headers.post['X-Post'] = 'sam-post';
axios.defaults.headers.get['X-Get'] = 'sam-get';
const ax = axios.create({
  baseURL: '/api',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'X-Auth': 'Sam Zz'
  },
})
window.console.log(axios);
ax.interceptors.response.use((ret) => {
  if (ret.data) {
    ret = ret.data
  }
  return ret
})

export default {
  name: 'UseCreate',
  props: {
    msg: String
  },
  mounted () {
    ax.get('/a').then((ret) => {
      window.console.log(ret);
    }, err => {
      window.console.log(err);
    })
    
    ax.post('/b').then((ret) => {
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
