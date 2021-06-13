
<template>
  <section class=" contact-section">
    <div class="container mt-5">
      <div class="justify-content-center">
          <div class="contact-form">
              <div class="column is-12">
                <h3 class="title is-1">Login</h3>
                <p class="title is-5 ">
                  Introduce tu correo y contraseña para acceder a tu perfil
                </p>
              </div>
              <div class="box p-6">
              <div class="column is-8 is-offset-2">
                <div class="form-group p-4">
                  <b-input
                    v-model="email"
                    type="email"
                    class="form-control"
                    placeholder="Your email"
                    @blur="hasErrors=false"
                  />
                </div>
              </div>
              <div class="column is-8 is-offset-2">
                <div class="form-group p-4">
                  <b-input
                    v-model="password"
                    type="password"
                    class="form-control"
                    placeholder="Your password"
                    @blur="hasErrors=false"
                  />
                </div>
              </div>
            </div>
            </div>
            <article v-if="hasErrors" class="message is-danger">
              <div class="message-body" v-html="errorMessage">
              </div>
            </article>
            <div class="p-5 buttons">
               <p>Si no estás registrado haz click  </p> <b-button type="is-warning" outlined class="m-2" to="/registro"> aquí</b-button>
            </div>

            <div class="form-group d-flex justify-content-center">
              <button class="button is-warning" @click="login">Login</button>
            </div>
          </div>
        </div>
  </section>
</template>

<script>
export default {
  name: "LoginPage",
  head(){
    return {
      title: 'Identifícate'
    }
  },
  data() {
    return {
      hasErrors: false,
      errorMessage: '',
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        this.validForm()
        const credentials = {
          email: this.email,
          password: this.password,
        }
        const response = await this.$api.auth.login(this.email, this.password)
        const token = response.token
        this.$store.dispatch('login', token)
        this.$router.push("/")
      } catch (error) {
        this.errorMessage = error.message
        this.hasErrors = true
      }
    },
    validForm(){
      if(this.email === ''){
        throw new Error('Por favor, introduce el email')
      }
      if(this.password === ''){
        throw new Error('Por favor, introduce la contraseña')
      }
    }
  },
};
</script>
<style>

  .box{
    background-color: #8ac4d081 ;
  }
  .contact-section{
    padding: 60px;
  }
  .button{
    color: black;
  }
</style>
