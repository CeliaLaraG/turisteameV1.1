import axios from 'axios'
import Auth from './resources/auth'
import Article from './resources/articles'
import User from './resources/users'

export default (context, inject) => {
  axios.defaults.baseURL = context.env.baseURL

  console.info(context.store)
  inject('api', {
    auth: new Auth(axios),
    articles: new Article(axios),
    users: new User(axios),
    initSession(token = null){
      if(token){
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      }
    },
    closeSession(){
      axios.defaults.headers.common['Authorization'] = ''
    }
  })
}
