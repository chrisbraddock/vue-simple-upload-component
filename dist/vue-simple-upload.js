!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueUploadFile=t():e.VueUploadFile=t()}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var i={};return t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=9)}([function(e,t,i){i(6);var n=i(4)(i(1),i(5),"data-v-63eed17c",null);e.exports=n.exports},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"UploadFile",data:function(){return{file:!1,isDragOver:!1,filedetailsTemplate:'\n\t\t\t<div class="upload-file-details">\n\t\t\t<div class="upload-file-thumbnail"></div>\n\t\t\t<div class="upload-file-details-body">\n\t\t\t<span class="upload-file-filename"></span>\n\t\t\t<button type="button" class="upload-file-remove-file">'+this.cancelButton+'</button>\n\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="upload-file-message">'+this.uploadedMessage+"</div>"}},props:{message:{type:String,required:!1,default:"Choose a file..."},dragOverMessage:{type:String,required:!1,default:"Drag it here"},uploadedMessage:{type:String,required:!1,default:""},showButton:{type:Boolean,required:!1,default:!1},cancelButton:{type:String,required:!1,default:"Cancel"},buttonTitle:{type:String,required:!1,default:"Send"},buttonClass:{type:Array,required:!1,default:function(){return[]}},itemIndex:{type:String,required:!1,default:"0"},isDragDrop:{type:Boolean,required:!1,default:!1},acceptedFormats:{type:Array,required:!1,default:function(){return[]}}},computed:{isAdvancedUpload:function(){var e=document.createElement("div");return("draggable"in e||"ondragstart"in e&&"ondrop"in e)&&"FormData"in window&&"FileReader"in window}},mounted:function(){if(this.isDragDrop&&this.isAdvancedUpload){var e=document.getElementById("upload-file"+this.itemIndex);e.addEventListener("dragover",this.dragOver,!1),e.addEventListener("dragenter",this.dragEnter,!1),e.addEventListener("dragleave",this.dragLeave,!1),e.addEventListener("drop",this.drop,!1)}},methods:{changed:function(e){e.preventDefault(),this.addFile(!1,e)},changeLabel:function(e){var t=e.target.nextElementSibling,i="";i=e.target.value.split("\\").pop(),t.innerHTML=i?i:labelVal},send:function(){this.$emit("send-file",this.file)},dragOver:function(e){e.preventDefault(),this.isDragOver=!0},dragEnter:function(e){this.isDragOver=!0},dragLeave:function(e){this.isDragOver=!1},drop:function(e){e.preventDefault(),this.isDragOver=!1,this.addFile(!0,e)},addFile:function(e,t){this.file=e?t.dataTransfer.files[0]:t.target.files[0],this.acceptedFormats.length>0?this.acceptedFormats.indexOf(this.file.type)>-1?(this.addFileThumbnail(),this.$emit("selected-file",this.file)):this.file=null:(this.addFileThumbnail(),this.$emit("selected-file",this.file))},addFileThumbnail:function(){var e=this.getEmptyPreviewContainer(),t=document.createElement("div"),i=this.file.name.split("."),n=i[i.length-1];t.innerHTML=this.filedetailsTemplate,t.classList.add("upload-file-preview"),t.querySelector(".upload-file-filename").innerHTML=this.file.name,t.querySelector(".upload-file-thumbnail").classList.add("upload-file-"+n),t.querySelector(".upload-file-remove-file").addEventListener("click",this.removeFile),e.appendChild(t)},removeFile:function(e){this.getEmptyPreviewContainer(),document.getElementById("uploadFile"+this.itemIndex).value="",this.$emit("remove-file",this.file),this.file=!1},getEmptyPreviewContainer:function(){var e=document.getElementById("upload-file-preview-container"+this.itemIndex);return e.innerHTML="",e}}}},function(e,t,i){t=e.exports=i(3)(),t.push([e.i,".upload-file .inputfile[data-v-63eed17c]{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}.upload-file .inputfile+label[data-v-63eed17c]{cursor:pointer}.upload-file .inputfile+label[data-v-63eed17c]:hover,.upload-file .inputfile:focus+label[data-v-63eed17c]{color:#30343b}.upload-file .fade-enter-active[data-v-63eed17c],.upload-file .fade-leave-active[data-v-63eed17c]{transition:opacity .5s}.upload-file .fade-enter[data-v-63eed17c],.upload-file .fade-leave-active[data-v-63eed17c]{opacity:0}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var i=this[t];i[2]?e.push("@media "+i[2]+"{"+i[1]+"}"):e.push(i[1])}return e.join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(n[a]=!0)}for(r=0;r<t.length;r++){var o=t[r];"number"==typeof o[0]&&n[o[0]]||(i&&!o[2]?o[2]=i:i&&(o[2]="("+o[2]+") and ("+i+")"),e.push(o))}},e}},function(e,t){e.exports=function(e,t,i,n){var r,a=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(r=e,a=e.default);var s="function"==typeof a?a.options:a;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),i&&(s._scopeId=i),n){var d=s.computed||(s.computed={});Object.keys(n).forEach(function(e){var t=n[e];d[e]=function(){return t}})}return{esModule:r,exports:a,options:s}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"upload-file",class:{"upload-file-dragdrop":e.isDragDrop,"is-dragover":e.isDragOver},attrs:{id:"upload-file"+e.itemIndex}},[i("input",{staticClass:"inputfile",attrs:{type:"file",name:"uploadFile",id:"uploadFile"+e.itemIndex,accept:e.acceptedFormats.join(",")},on:{change:function(t){e.changed(t)}}}),e._v(" "),i("label",{directives:[{name:"show",rawName:"v-show",value:!e.file,expression:"!file"}],attrs:{for:"uploadFile"+e.itemIndex}},[e.isDragOver?[i("div",{domProps:{innerHTML:e._s(e.dragOverMessage)}})]:[i("div",{domProps:{innerHTML:e._s(e.message)}})]],2),e._v(" "),i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.file,expression:"file"}],staticClass:"upload-file-preview-container",attrs:{id:"upload-file-preview-container"+e.itemIndex}})]),e._v(" "),e.showButton?i("button",{directives:[{name:"show",rawName:"v-show",value:e.file,expression:"file"}],staticClass:"button",class:e.buttonClass,attrs:{type:"button"},on:{click:function(t){e.send()}}},[e._v(e._s(e.buttonTitle))]):e._e()],1)},staticRenderFns:[]}},function(e,t,i){var n=i(2);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(7)("9d10f688",n,!0)},function(e,t,i){function n(e){for(var t=0;t<e.length;t++){var i=e[t],n=u[i.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](i.parts[r]);for(;r<i.parts.length;r++)n.parts.push(o(i.parts[r]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var a=[],r=0;r<i.parts.length;r++)a.push(o(i.parts[r]));u[i.id]={id:i.id,refs:1,parts:a}}}}function r(e,t){for(var i=[],n={},r=0;r<t.length;r++){var a=t[r],o=a[0],s=a[1],d=a[2],l=a[3],u={css:s,media:d,sourceMap:l};n[o]?(u.id=e+":"+n[o].parts.length,n[o].parts.push(u)):(u.id=e+":0",i.push(n[o]={id:o,parts:[u]}))}return i}function a(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function o(e){var t,i,n=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]'),r=null!=n;if(r&&v)return h;if(m){var o=c++;n=p||(p=a()),t=s.bind(null,n,o,!1),i=s.bind(null,n,o,!0)}else n=n||a(),t=d.bind(null,n),i=function(){n.parentNode.removeChild(n)};return r||t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else i()}}function s(e,t,i,n){var r=i?"":n.css;if(e.styleSheet)e.styleSheet.cssText=g(t,r);else{var a=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function d(e,t){var i=t.css,n=t.media,r=t.sourceMap;if(n&&e.setAttribute("media",n),r&&(i+="\n/*# sourceURL="+r.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r=i(8),u={},f=l&&(document.head||document.getElementsByTagName("head")[0]),p=null,c=0,v=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,i){v=i;var a=r(e,t);return n(a),function(t){for(var i=[],o=0;o<a.length;o++){var s=a[o],d=u[s.id];d.refs--,i.push(d)}t?(a=r(e,t),n(a)):a=[];for(var o=0;o<i.length;o++){var d=i[o];if(0===d.refs){for(var l=0;l<d.parts.length;l++)d.parts[l]();delete u[d.id]}}}};var g=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var i=[],n={},r=0;r<t.length;r++){var a=t[r],o=a[0],s=a[1],d=a[2],l=a[3],u={id:e+":"+r,css:s,media:d,sourceMap:l};n[o]?n[o].parts.push(u):i.push(n[o]={id:o,parts:[u]})}return i}},function(e,t,i){"use strict";e.exports=i(0)}])});