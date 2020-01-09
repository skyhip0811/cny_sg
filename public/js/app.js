(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/component/carosuel.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/component/carosuel.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    autoplay: false,
    sis: null,
    type: null,
    interval: 999999999
  },
  methods: {
    getIndex: function getIndex() {
      return this.$refs.nestedcarousel.index;
    }
  },
  data: function data() {
    return {
      data: ['<div class="name"><span class="totext">' + this.sis + ': </span>Dude</div>', '<div class="name"><span class="totext">' + this.sis + ': </span>Boss</div>', '<div class="name"><span class="totext">' + this.sis + ': </span>Sunshine</div>', '<div class="name"><span class="totext">' + this.sis + ': </span>Me</div>', '<div class="name"><span class="totext">' + this.sis + ': </span>Mum</div>', '<div class="name"><span class="totext">' + this.sis + ': </span>Auntie</div>', '<div class="name"><span class="totext">' + this.sis + ': </span>Bae</div>', '<div class="name"><span class="totext">' + this.sis + ': </span>Peeps</div>', '<div class="name"><span class="totext">' + this.sis + ': </span>Precious</div>', '<div class="name"><span class="totext">' + this.sis + ': </span>You</div>', '<div class="name"><span class="totext">' + this.sis + ': </span>Dad</div>', '<div class="name"><span class="totext">' + this.sis + ': </span>Uncle </div>']
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/component/carosuel.vue?vue&type=template&id=9f918e18&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/component/carosuel.vue?vue&type=template&id=9f918e18& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "col-sm mt-3 mt-sm-0" },
      [
        _c("carousel", {
          ref: "nestedcarousel",
          attrs: {
            interval: 99999999,
            autoplay: false,
            data: _vm.data,
            "indicator-type": "disc"
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chenfengyuan_vue_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chenfengyuan/vue-carousel */ "./node_modules/@chenfengyuan/vue-carousel/dist/vue-carousel.js");
/* harmony import */ var _chenfengyuan_vue_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chenfengyuan_vue_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_carosuel_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/carosuel.vue */ "./resources/js/component/carosuel.vue");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");


window.Vue.use(_chenfengyuan_vue_carousel__WEBPACK_IMPORTED_MODULE_0___default.a);

window.Vue.use(_component_carosuel_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
window.Vue = new Vue({
  el: '#app',
  components: {
    Carousel: _component_carosuel_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ["receiverinput", "senderinput"],
  data: function data() {
    return {
      "activeIndex": 0,
      "namedata": ["Dude", "Boss", "Sunshine", "Me", "Mum", "Auntie", "Bae", "Peeps", "Precious", "You", "Dad", "Uncle"]
    };
  },
  methods: {
    fbclick: function fbclick() {
      window.location.href = 'https://www.facebook.com/AsiarayOutdoorAdvertising/?fref=nf';
    },
    previewclick: function previewclick() {
      if (this.$refs.sendercarousel.getIndex() != undefined && this.$refs.receivercarousel.getIndex() != undefined && this.activeIndex != undefined) {
        window.location.href = 'result?from=' + this.$refs.sendercarousel.getIndex() + "&to=" + this.$refs.receivercarousel.getIndex() + "&video=" + "1";
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
      if (this.$refs.receivercarousel.getIndex() != undefined && this.$refs.sendercarousel.getIndex() != undefined && this.activeIndex != undefined) {
        var str = "Some Text \n\n" + 'http://localhost/' + 'result?from=' + this.$refs.sendercarousel.getIndex() + "&to=" + this.$refs.receivercarousel.getIndex() + "&video=" + "1";
        var urlencodedtext = encodeURIComponent(str);
        var win = window.open('https://api.whatsapp.com/send?&text=' + urlencodedtext);
        win.focus();
        window.location.href = '/end';
      } else {
        alert("some field missing");
      }
    },
    shareclick2: function shareclick2() {
      if (this.receiverinput != undefined && this.senderinput != undefined && this.activeIndex != undefined) {
        var str = "Some Text \n\n" + 'http://localhost/' + 'result?from=' + this.senderinput + "&to=" + this.receiverinput + "&video=" + "1";
        var urlencodedtext = encodeURIComponent(str);
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
    sizechange: function sizechange() {
      console.log("change");
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
    window.onresize = this.sizechange;
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

/***/ "./resources/js/component/carosuel.vue":
/*!*********************************************!*\
  !*** ./resources/js/component/carosuel.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _carosuel_vue_vue_type_template_id_9f918e18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carosuel.vue?vue&type=template&id=9f918e18& */ "./resources/js/component/carosuel.vue?vue&type=template&id=9f918e18&");
/* harmony import */ var _carosuel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carosuel.vue?vue&type=script&lang=js& */ "./resources/js/component/carosuel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _carosuel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _carosuel_vue_vue_type_template_id_9f918e18___WEBPACK_IMPORTED_MODULE_0__["render"],
  _carosuel_vue_vue_type_template_id_9f918e18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/component/carosuel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/component/carosuel.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/component/carosuel.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carosuel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./carosuel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/component/carosuel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carosuel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/component/carosuel.vue?vue&type=template&id=9f918e18&":
/*!****************************************************************************!*\
  !*** ./resources/js/component/carosuel.vue?vue&type=template&id=9f918e18& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_carosuel_vue_vue_type_template_id_9f918e18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./carosuel.vue?vue&type=template&id=9f918e18& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/component/carosuel.vue?vue&type=template&id=9f918e18&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_carosuel_vue_vue_type_template_id_9f918e18___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_carosuel_vue_vue_type_template_id_9f918e18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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