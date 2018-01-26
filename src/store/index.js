import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        objectives: []
    },
    getters: {
        objectives(state) {
            return state.objectives;
        }
    },
    mutations: {
        setObjective(state, data) {
            state.objectives.push({
                value: data.value
            })
        }
    }

});