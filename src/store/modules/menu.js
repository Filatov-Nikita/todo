export default {
    namespaced: true, 
    state: {
        items: [
            {
                url: '/planers',
                text: 'Мои задачи'
            },
            {
                url: '/completed',
                text: 'Выполненные задачи'
            }
        ]
    },
    getters: {
        items(state) {
            return state.items;
        }
    }
}