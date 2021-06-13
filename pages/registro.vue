
<template>
  <section class=" contact-section">
    <div class="container mt-5">
      <div class="justify-content-center">
          <div class="contact-form">
              <div class="column is-12">
                <h3 class="title is-1">Regístrate</h3>

              </div>
              <div class="box p-6">
              <div class="column is-8 is-offset-2">
                <div class="form-group p-4">
                  <b-input
                    v-model="firstname"
                    type="text"
                    class="form-control"
                    placeholder="Tu nombre"
                    @blur="hasErrors=false"
                  />
                </div>
              </div> <div class="column is-8 is-offset-2">
                <div class="form-group p-4">
                  <b-input
                    v-model="lastname"
                    type="text"
                    class="form-control"
                    placeholder="Tu primer apellido"
                    @blur="hasErrors=false"
                  />
                </div>
              </div>
              <div class="column is-8 is-offset-2">
                <div class="form-group p-4">
                  <b-input
                    v-model="email"
                    type="email"
                    class="form-control"
                    placeholder="Tu email"
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
                    placeholder="Contraseña"
                    @blur="hasErrors=false"
                  />
                </div>
                 <div class="form-group p-4 mt-4">
                  <b-input
                    v-model="password"
                    type="password"
                    class="form-control"
                    placeholder="Repite la contraseña"
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
              <div class="column is-12">
                <div class="form-group">
                  <label class="checkbox">
                    <input type="checkbox" />
                    Acepto los términos y condiciones legales
                  </label>
                </div>
                <!-- v-model="legalAcceptance" required ESTO VA DENTRO DE CHECKBOX -->
              </div>
            </div>
            <div class="form-group d-flex justify-content-center mt-5">
              <button class="button is-warning" @click="login">Regístrate</button>
            </div>
          </div>
  </section>
</template>
<script>
export default {

}
</script>

