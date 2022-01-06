import Vue from "vue";
import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload, {
  preLoad: 1.3,
  // attempt: 1,
  loading: "/rotate_right_black_24dp.svg"
  // lazyComponent: true
});
