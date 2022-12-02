import { createStore } from 'vuex'

export default createStore({

    state:{
        logeado: false,
    },
    mutations:{
        loginLogout( state ){
            state.logeado ? state.logeado = false : state.logeado = true;
        },
    }
})