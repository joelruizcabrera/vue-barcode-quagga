/*!
 * vue-barcode-quagga v0.0.2
 * (c) Joel Schwegmann
 * Released under the ISC License.
 */
'use strict';

var vue = require('vue');

var script = {
  name: 'VueBarcodeScanner'
};

var _hoisted_1 = {
  id: "vue-barcode-scanner"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, " asd ");
}

script.render = render;

var index = {
  install: function install(Vue, options) {
    Vue.component("vue-barcode-scanner", script);
  }
};

module.exports = index;
