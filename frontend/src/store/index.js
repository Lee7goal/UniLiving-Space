import {createStore} from "vuex";

const store = createStore({
    state: {
        count:0,
        name: 'lee7goal'
    },
    getters: {

    },
    mutations: {
        increaseCount(state) {
            state.count++
        }
    },
    actions: {

    }
})

export default store;