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
      editorOption: {
        modules:{
          toolbar:[
            ['bold', 'italic', 'underline', 'strike'], //加粗，斜体，下划线，删除线
            ['blockquote', 'code-block'],  //引用，代码块


            [{ 'header': 1 }, { 'header': 2 }],  // 标题，键值对的形式；1、2表示字体大小
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],  //列表
            [{ 'script': 'sub'}, { 'script': 'super' }], // 上下标
            [{ 'indent': '-1'}, { 'indent': '+1' }],  // 缩进
            [{ 'direction': 'rtl' }],    // 文本方向

            [{ 'size': ['small', false, 'large', 'huge'] }], // 字体大小
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],  //几级标题


            [{ 'color': [] }, { 'background': [] }],  // 字体颜色，字体背景颜色
            [{ 'font': [] }],  //字体
            [{ 'align': [] }], //对齐方式


            ['clean'], //清除字体样式
            ['image','video'] //上传图片、上传视频
          ],
          imageDrop:true,
          imageResize:{ }
        },
        theme: 'snow'
      }
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
    onEditorBlur(){ // 失去焦点事件
      console.log('失去焦点事件')
    },
    onEditorFocus(){ // 获得焦点事件
      console.log('获得焦点事件')
    },
    onEditorChange(){ // 内容改变事件
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
