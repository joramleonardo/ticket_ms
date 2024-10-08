import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// export default new Vuex.Store({
//     state: {
//         apiURL: 'http://127.0.0.1:8004/api',
//         serverPath: 'http://127.0.0.1:8004'
//     },
//     mutations: {},
//     actions: {}
// });



export default new Vuex.Store({
    state: {
        apiURL: 'http://ticketing.stii.local/api',
        serverPath: 'http://ticketing.stii.local'
    },
    mutations: {},
    actions: {}
});