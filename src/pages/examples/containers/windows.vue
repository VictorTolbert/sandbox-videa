<template lang="pug">
  .example
    editor-window(title="my window").
      editor window body

    browser-window(url="http://example.com").
      browser window body
</template>

<script>
  import { EditorWindow, BrowserWindow } from 'vue-windows'

  export default {
    name: 'windows-example',

    metaInfo: {
      title: 'Example / Windows',
    },

    components: { EditorWindow, BrowserWindow },

    beforeCreate () {
      this.$store.state.activeApp = 'examples'
    }
  }
</script>

<style src="vue-windows/dist/vue-windows.css"></style>
