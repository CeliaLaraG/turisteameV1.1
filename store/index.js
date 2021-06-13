import jwtDecode from 'jwt-decode'

export const state = () => ({
  token: null,
  user: null
})

export const mutations = {
  saveToken(state, token = null){
    state.token = token

    if(token){
      state.user = jwtDecode(token)
    }

    if(!token){
      state.user = null
    }
  }
}

export const actions = {
  // primer parámetro contexto de VUEX
  // segundo parámetro contexto de NUXT
  nuxtServerInit(ctx, {app}){

    // sacamos la cookie de la petición
    const cookieToken = app.$cookies.get('jwt-token')

    if(cookieToken){
      //iniciar el store con la sesión el usuario
      ctx.dispatch('login',cookieToken)
    }
  },
  login(context, token){

    if(token === '' || token === undefined){
      token = null
    }

    if(token){
      //localStorage.setItem("jwt-token", token)
      this.$cookies.set('jwt-token', token)

      //configuro axios
      this.$api.initSession(token)
    }

    context.commit('saveToken', token)
  },
  logout(context){
    localStorage.removeItem("jwt-token")
    // this.$cookies.remove('jwt-token')
    //configuro axios
    this.$api.closeSession()

    context.commit('saveToken')
  }
}

export const getters = {
  isAuth(state){
    return state.token !== null && state.token !== ""
  },
  token(state){
    return state.token
  },
  currentUser(state){
    return state.user
  }
}
