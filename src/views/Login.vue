<template>
  <div>
    <div class="row">
      <label>
        Username:
        <input v-model="username" type="text" placeholder="user">
      </label>
    </div>
    <div class="row">
      <label>
        Password:
        <input v-model="password" :type="password_type" placeholder="password">
      </label>
      <button class="btn-show-password" v-on:click="showPassword">Show</button>
    </div>
    <div v-if="mensagem_login">
      <h5 :class="{'text-danger': has_error}">{{ mensagem_login }}</h5>
    </div>
    <div class="row">
      <button v-on:click="login">login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    username: "fake",
    password: "fake123",
    password_type: "password",
    has_error: false,
    mensagem_login: null
  }),
  methods: {
    showPassword() {
      if (this.password_type === "password")
        this.password_type = "text"
      else
        this.password_type = "password"
    },
    login: function () {
      let self = this
      if (!(this.username === "fake" && this.password === "fake123")) {
        this.has_error = true
        this.mensagem_login = "Usuário e senha inválido, tente novamente"
      } else {
        window.sessionStorage.setItem("isLogged", true)
        this.mensagem_login = "Logado com sucesso ..."
        setTimeout(function () {
          self.$router.push({
            path: self.$route.query.redirect
          })
        }, 1000)
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .btn-show-password
    padding 0 3px
    margin-left -50px
    height 32px
    border-radius 50px
    font-size 10px
  .row
    margin 5px
</style>
