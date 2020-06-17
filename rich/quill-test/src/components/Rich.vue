<template>
  <div class="hello">
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
      @change="onEditorChange($event)">
    </quill-editor>
    <button v-on:click="saveHtml">保存</button>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'

export default {
  name: 'HelloWorld',
  components: {
    quillEditor
  },
  data() {
    return {
      content: `<p>hello world</p>`,
      editorOption: {}
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
  },
  methods: {
    onEditorReady(editor) {
      console.log(editor)
    },
    onEditorBlur(){// 失去焦点事件
      console.log('失去焦点事件')
    },
    onEditorFocus(){// 获得焦点事件
      console.log('获得焦点事件')
    },
    onEditorChange(){// 内容改变事件
      console.log('内容改变事件')
    },
    saveHtml() {
      console.log(this.editor)
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
