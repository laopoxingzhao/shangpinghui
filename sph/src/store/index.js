import Vue from "vue";
import VUex  from "vuex";

import home from "./home";
Vue.use(VUex)
// const state = {
//     count:1,
//     aa:"sss"
// }
// const mutations = {}
    
// const actions ={}

// const getters = {}

export default new VUex.Store({
   modules:{
    home
   }
})