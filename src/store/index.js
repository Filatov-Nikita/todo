import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import menu from './modules/menu';
import list from './modules/list';
export const store = new Vuex.Store({
    modules: {
        menu,
        list
    }
});