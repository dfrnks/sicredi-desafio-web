<template>
  <div id="app">
    <div class="nav">
      <img class="logo" alt="logo" src="./assets/logo.png">
      <router-link to="/">Home</router-link> |
      <router-link to="/new">New</router-link> |
      <a v-on:click="logout">Logout</a>
    </div>
    <router-view class="content"/>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    logout() {
      window.sessionStorage.removeItem("isLogged")
      this.$router.go()
    }
  }
}
</script>

<style lang="stylus">
  body, html
    margin 0
    background whitesmoke

  #app
    font-family Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #f4516d
    .nav
      padding 20px
      background #292929
    .content
      margin-top 20px
    .logo
      position absolute
      left 10px
      top 8px
      width 40px

  a
    text-decoration none
    cursor pointer
    color #f4516d

  button
    padding 0 30px
    text-align center
    line-height 38px
    cursor pointer
    align-items center
    border-radius 4px
    display inline-flex
    letter-spacing .0892857143em
    justify-content center
    outline 0
    position relative
    text-decoration none
    text-indent .0892857143em
    text-transform uppercase
    transition-duration .28s
    transition-property box-shadow,transform,opacity
    transition-timing-function cubic-bezier(.4,0,.2,1)
    color #FFF
    background-color #56d353
    border-color #56d353

  input
    border-radius 50px
    border-color #e2e2e2
    padding 8px
    border-width 1px
    border-style solid

  input:focus
    border-color #f4516d

  *:focus
    outline none
</style>
