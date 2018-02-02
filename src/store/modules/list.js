export default {
    namespaced: true, 
    state: {
        planers: []
    },
    getters: {
        planers(state) {
            return state.planers;
        }
    },
    mutations: {
        add(state, data) {
            state.planers.push({
                text: data.text
            });
        }
    }, 
    actions: {
        add(store, data) {
            store.commit('add', data);
        }
    }
}