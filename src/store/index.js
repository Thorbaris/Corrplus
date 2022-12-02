import { createStore } from 'vuex'

export default createStore({

    state:{
        count:2,
        logeado: false,
    },
    mutations:{
        loginLogout( state ){
            if(state.logeado){
                state.logeado = false
            }else{
                state.logeado = true
            }
        },
        incremet( state ){
            state.count++
        }
    }
})