<template>
  <div id="app">
    <vue-uploader
      :acceptedFormats="acceptedFormats"
      :isDragDrop="true" />
  </div>
</template>

<script>
  import VueUploader from '../src/components/VueUploader.vue'
  export default {
    name: 'VueUploaderExample',
    components: { VueUploader },
    data () {
      return {
        acceptedFormats: [
          'application/pdf',
          'application/msword',
          'audio/mp3'
        ]
      }
    }
  }
</script>
