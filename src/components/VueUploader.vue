<template>

  <div class="vue-uploader">

    <input
      class="file-input"
      id="uploadFile"
      ref="uploadFile"
      type="file"
      :accept="acceptedFormats.join(',')"
      @change="onFileInputChange($event)">

    <label
      for="uploadFile"
      v-if='!file'>
      <div
        v-if="!isDragOver"
        v-html="message"></div>
      <div
        v-else
        v-html="dragOverMessage"></div>
    </label>
    <div class="uploaded-file" v-if="file">{{ uploadFileFileName }}</div>

  </div>
</template>

<script type="text/babel">
  // toggle true for debug logs
  let log = false ? console : { debug: () => {} }
  export default {
    name: 'VueUploader',
    props: {
      acceptedFormats: { type: Array, required: false, default () { return [] } },
      dragOverMessage: { type: String, required: false, default: 'drop file to upload' },
      message: { type: String, required: false, default: 'click to choose or drag/drop a file here' },
    },
    mounted () {
      log.debug('[VueUploader] mounted()')
      this.activateDragDrop()
    },
    data () {
      return {
        file: false,
        isDragOver: false
      }
    },
    computed: {
      isAdvancedUpload () {
        let div = document.createElement('div')
        return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div))
          && 'FormData' in window && 'FileReader' in window
      },
      uploadFileFileName () { return this.file && this.file.name.substring(0, 24) }
    },
    methods: {
      activateDragDrop () {
        log.debug('[VueUploader] activateDragDrop()')
        if (!this.isAdvancedUpload) return
        log.debug('[VueUploader] activating drag/drop')
        this.$el.addEventListener('dragover', this.onDragOver, false)
        this.$el.addEventListener('dragenter', this.onDragEnter, false)
        this.$el.addEventListener('dragleave', this.onDragLeave, false)
        this.$el.addEventListener('drop', this.onDrop, false)
      },
      onFileInputChange (e) {
        log.debug('[VueUploader] onFileInputChange()', e)
        e.preventDefault()
        this.onFileReceived(false, e)
      },
      onDragOver (e) {
        log.debug('[VueUploader] onDragOver()')
        e.preventDefault()
        this.isDragOver = true
      },
      onDragEnter (e) {
        log.debug('[VueUploader] onDragEnter()')
        this.isDragOver = true
      },
      onDragLeave (e) {
        log.debug('[VueUploader] onDragLeave()')
        this.isDragOver = false
      },
      onDrop (e) {
        log.debug('[VueUploader] onDrop()', e)
        e.preventDefault()
        this.isDragOver = false
        this.onFileReceived(true, e)
      },
      onFileReceived (wasDropped, e) {
        log.debug('[VueUploader] onFileReceived() wasDropped:', wasDropped, 'e:', e)
        this.file = (wasDropped) ? e.dataTransfer.files[0] : e.target.files[0]
        if (this.acceptedFormats.length < 1) {
          this.$emit('received-file', this.file)
          return
        }
        if (this.acceptedFormats.indexOf(this.file.type) > -1) {
          this.$emit('received-file', this.file)
        } else {
          log.debug('[VueUploader] onFileReceived() received unaccepted format')
          this.$emit('received-bad-file', this.file)
          this.file = null
        }
      },
      removeFile (e) {
        log.debug('[VueUploader] removeFile()')
        // this.getEmptyPreviewContainer()
        let fileInput = document.getElementById('uploadFile')
        fileInput.value = ''
        this.$emit('remove-file', this.file)
        this.file = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .vue-uploader {
    flex-direction: column;
    label {
      /*background-color: red;*/
      cursor: pointer;
      height: 100%;
      text-align: center;
      width: 100%;
      div {
        /*background-color: lightblue;*/
        height: 100%;
        padding: 1em;
      }
    }
    &:focus + label, & + label:hover { color: #30343b; }
    .file-input {
      /*border: 1px solid green;*/
      height: 0.1px;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      width: 0.1px;
      z-index: -1;
    }
  }
</style>
