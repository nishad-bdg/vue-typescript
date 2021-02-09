import Vue from "vue";
import Vuex, { Store } from "vuex";

import Tutorial from '@/store/modules/tutorial'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {},
  actions: {},
  modules: {
    Tutorial
  }
});


