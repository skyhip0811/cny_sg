(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

window.Vue = new Vue({
  el: '#app',
  props: ["receiverinput", "senderinput"],
  data: function data() {
    return {
      "activeIndex": 0
    };
  },
  methods: {
    fbclick: function fbclick() {
      window.location.href = 'https://www.facebook.com/AsiarayOutdoorAdvertising/?fref=nf';
    },
    previewclick: function previewclick() {
      if (this.senderinput != undefined && this.receiverinput != undefined && this.activeIndex != undefined) {
        window.location.href = 'result?from=' + this.senderinput + "&to=" + this.receiverinput + "&video=" + "1";
      } else {
        alert("some field missing");
      }
    },
    editclick: function editclick() {
      window.location.href = '/form';
    },
    moreclick: function moreclick() {
      window.location.href = '/form';
    },
    shareclick: function shareclick() {
      if (this.senderinput != undefined && this.receiverinput != undefined && this.activeIndex != undefined) {
        str = "Some Text \n\n" + 'http://localhost/' + 'result?from=' + this.senderinput + "&to=" + this.receiverinput + "&video=" + "1";
        urlencodedtext = encodeURIComponent(str);
        var win = window.open('https://api.whatsapp.com/send?&text=' + urlencodedtext);
        win.focus();
        window.location.href = '/end';
      } else {
        alert("some field missing");
      }
    },
    carouselchange: function carouselchange(e) {
      this.activeIndex = e;
    },
    copytext: function copytext() {
      if (this.senderinput != undefined && this.receiverinput != undefined && this.activeIndex != undefined) {
        var el = document.createElement('textarea');
        el.value = "Some Text \n\n" + 'http://localhost/' + 'result?from=' + this.senderinput + "&to=" + this.receiverinput + "&video=" + this.activeIndex;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      } else {
        alert("some field missing");
      }
    }
  },
  mounted: function mounted() {
    this.receiverinput = this.$el.hasAttribute("receiverinput") ? this.$el.attributes.receiverinput.value : null;
    this.senderinput = this.$el.hasAttribute("senderinput") ? this.$el.attributes.senderinput.value : null;
    this.activeIndex = this.$el.hasAttribute("value") ? this.$el.attributes.video.value : 0;
  }
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");

__webpack_require__(/*! element-ui */ "./node_modules/element-ui/lib/element-ui.common.js");
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\projects\cny_sg\cny_sg\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! D:\projects\cny_sg\cny_sg\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);