import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state () {
        return {
            count: 0,
            isAuthenticated: false,
            isLoading: true
        }
    },
    // state: {
    //     count: 0,
    //     isAuthenticated: false,
    //     isLoading: true
    // },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})

export default store;