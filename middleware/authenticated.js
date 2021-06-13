// Gracias a esta parte en la aplicacion el usuario esta OBLIGADO  estar autentificado para poder acceder a ciertos sitios y de no estar logeado te manda al login
export default ({ store, redirect }) => {
  // retrieving keys via object destructuring
  const isAuth = store.getters.isAuth
  console.info("Identificado:", isAuth)
  if (!isAuth) {
    return redirect('/login')
  }
}
