interface State {
    age: number
}

interface Payload {
    multiple: number
}

const state:State = {
    age: 24
}

export default {
    namespaced: true,   //Home
    state: () => (state),
    getters: {
        doubleAge(state: State) {
            return state.age * 2
        }
    },
    mutations: {
        addAge(state:State, data: any) {
            state.age += data.multiple
        }
    },
    actions: {
        goAddAge(context:any, payload: Payload) {
            context.commit('addAge', {
                multiple: payload.multiple
            }, { root: false })
        }
    }
}