<template>
  <div class="hello">
    <div id="editor">
      <p>欢迎使用 wangEditor 富文本编辑器</p>
    </div>
  </div>
</template>

<script>
import wangEditor from 'wangeditor'
export default {
  name: 'HelloWorld',
  data() {
    return {
      editor: null
    }
  },
  mounted() {
    this.editor = new wangEditor('#editor')
    this.editor.customConfig.uploadImgShowBase64  = true
    this.editor.create()
  },
  methods: {
    setHTML(html) {
      this.editor.txt.html(html)
    },
    getHTML() {
      return this.editor.txt.html()
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
