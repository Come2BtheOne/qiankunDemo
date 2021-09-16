interface State {
    count: number
}

const state:State = {
    count: 1
}

export default {
    namespaced: true,   //Cart
    state: () => (state),
    getters: {
        trebleCount(state: State) {
            return state.count * 3
        }
    },
    mutations: { },
    actions: { }
}