import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state={
    count:0
};

const actions = {
    add:function({commit}){
        commit("add");
    },
    sub:function({commit}){
        commit("sub");
    }
};

const mutations = {
    add:function(state){
        state.count++;
    },
    sub:function(state){
        state.count--;
    }
};

const getters = {
    count:function(state){
        return state.count;
    }
};

export default new Vuex.Store({
    state,actions,mutations,getters
});
