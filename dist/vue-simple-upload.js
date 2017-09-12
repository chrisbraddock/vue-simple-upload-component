!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueUploadFile=t():e.VueUploadFile=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,r){r(7);var n=r(5)(r(2),r(6),"data-v-5f2d22d7",null);e.exports=n.exports},function(e,t,r){"use strict";e.exports=r(0)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={debug:function(){}};t.default={name:"VueUploader",props:{acceptedFormats:{type:Array,required:!1,default:function(){return[]}},dragOverMessage:{type:String,required:!1,default:"drop file to upload"},message:{type:String,required:!1,default:"click to choose or drag/drop a file here"}},mounted:function(){n.debug("[VueUploader] mounted()"),this.activateDragDrop()},data:function(){return{file:!1,isDragOver:!1}},computed:{isAdvancedUpload:function(){var e=document.createElement("div");return("draggable"in e||"ondragstart"in e&&"ondrop"in e)&&"FormData"in window&&"FileReader"in window},uploadFileFileName:function(){return this.file&&this.file.name.substring(0,24)}},methods:{activateDragDrop:function(){n.debug("[VueUploader] activateDragDrop()"),this.isAdvancedUpload&&(n.debug("[VueUploader] activating drag/drop"),this.$el.addEventListener("dragover",this.onDragOver,!1),this.$el.addEventListener("dragenter",this.onDragEnter,!1),this.$el.addEventListener("dragleave",this.onDragLeave,!1),this.$el.addEventListener("drop",this.onDrop,!1))},onFileInputChange:function(e){n.debug("[VueUploader] onFileInputChange()",e),e.preventDefault(),this.onFileReceived(!1,e)},onDragOver:function(e){n.debug("[VueUploader] onDragOver()"),e.preventDefault(),this.isDragOver=!0},onDragEnter:function(e){n.debug("[VueUploader] onDragEnter()"),this.isDragOver=!0},onDragLeave:function(e){n.debug("[VueUploader] onDragLeave()"),this.isDragOver=!1},onDrop:function(e){n.debug("[VueUploader] onDrop()",e),e.preventDefault(),this.isDragOver=!1,this.onFileReceived(!0,e)},onFileReceived:function(e,t){if(n.debug("[VueUploader] onFileReceived() wasDropped:",e,"e:",t),this.file=e?t.dataTransfer.files[0]:t.target.files[0],this.acceptedFormats.length<1)return void this.$emit("received-file",this.file);this.acceptedFormats.indexOf(this.file.type)>-1?this.$emit("received-file",this.file):(n.debug("[VueUploader] onFileReceived() received unaccepted format"),this.$emit("received-bad-file",this.file),this.file=null)},removeFile:function(e){n.debug("[VueUploader] removeFile()"),document.getElementById("uploadFile").value="",this.$emit("remove-file",this.file),this.file=!1}}}},function(e,t,r){t=e.exports=r(4)(),t.push([e.i,".vue-uploader[data-v-5f2d22d7]{flex-direction:column}.vue-uploader label[data-v-5f2d22d7]{cursor:pointer;height:100%;text-align:center;width:100%}.vue-uploader label div[data-v-5f2d22d7]{height:100%;padding:1em}.vue-uploader+label[data-v-5f2d22d7]:hover,.vue-uploader:focus+label[data-v-5f2d22d7]{color:#30343b}.vue-uploader .file-input[data-v-5f2d22d7]{height:.1px;opacity:0;overflow:hidden;position:absolute;width:.1px;z-index:-1}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(e,t){e.exports=function(e,t,r,n){var i,o=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,o=e.default);var d="function"==typeof o?o.options:o;if(t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns),r&&(d._scopeId=r),n){var s=d.computed||(d.computed={});Object.keys(n).forEach(function(e){var t=n[e];s[e]=function(){return t}})}return{esModule:i,exports:o,options:d}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"vue-uploader"},[r("input",{ref:"uploadFile",staticClass:"file-input",attrs:{id:"uploadFile",type:"file",accept:e.acceptedFormats.join(",")},on:{change:function(t){e.onFileInputChange(t)}}}),e._v(" "),e.file?e._e():r("label",{attrs:{for:"uploadFile"}},[e.isDragOver?r("div",{domProps:{innerHTML:e._s(e.dragOverMessage)}}):r("div",{domProps:{innerHTML:e._s(e.message)}})]),e._v(" "),e.file?r("div",{staticClass:"uploaded-file"},[e._v(e._s(e.uploadFileFileName))]):e._e()])},staticRenderFns:[]}},function(e,t,r){var n=r(3);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(8)("446b8c07",n,!0)},function(e,t,r){function n(e){for(var t=0;t<e.length;t++){var r=e[t],n=l[r.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](r.parts[i]);for(;i<r.parts.length;i++)n.parts.push(o(r.parts[i]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(o(r.parts[i]));l[r.id]={id:r.id,refs:1,parts:a}}}}function i(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function o(e){var t,r,n=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(n){if(v)return h;n.parentNode.removeChild(n)}if(g){var o=c++;n=p||(p=i()),t=a.bind(null,n,o,!1),r=a.bind(null,n,o,!0)}else n=i(),t=d.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}function a(e,t,r,n){var i=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=m(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function d(e,t){var r=t.css,n=t.media,i=t.sourceMap;if(n&&e.setAttribute("media",n),i&&(r+="\n/*# sourceURL="+i.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=r(9),l={},f=s&&(document.head||document.getElementsByTagName("head")[0]),p=null,c=0,v=!1,h=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r){v=r;var i=u(e,t);return n(i),function(t){for(var r=[],o=0;o<i.length;o++){var a=i[o],d=l[a.id];d.refs--,r.push(d)}t?(i=u(e,t),n(i)):i=[];for(var o=0;o<r.length;o++){var d=r[o];if(0===d.refs){for(var s=0;s<d.parts.length;s++)d.parts[s]();delete l[d.id]}}}};var m=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var r=[],n={},i=0;i<t.length;i++){var o=t[i],a=o[0],d=o[1],s=o[2],u=o[3],l={id:e+":"+i,css:d,media:s,sourceMap:u};n[a]?n[a].parts.push(l):r.push(n[a]={id:a,parts:[l]})}return r}}])});