import VueBarcodeScanner from './VueBarcodeScanner.vue';

export default {
    install(Vue, options) {
        Vue.component("vue-barcode-scanner", VueBarcodeScanner)
    }
}
