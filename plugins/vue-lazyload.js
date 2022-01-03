import Vue from "vue";
import VueLazyload from "vue-lazyload";

const loadimage = require('../static/rotate_right_black_24dp.svg')

Vue.use(VueLazyload, {
  preLoad: 1.3,
  // attempt: 1,
  loading: loadimage,
  // lazyComponent: true
});
