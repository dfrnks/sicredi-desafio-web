<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <a v-on:click="logout">Logout</a>
    </div>
    <router-view id="content"/>
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
    color #ff3a72
    #nav
      padding 20px
      background #1d1d1d
    #content
      margin-top 20px
  a
    text-decoration none
    cursor pointer
    color #ff3a72
  button
    height: 38px;
    padding: 0 30px;
    text-align: center;
    font-size: 11px;
    line-height: 38px;
    cursor: pointer;
    box-sizing: border-box;

    align-items: center;
    border-radius: 4px;
    display: inline-flex;
    flex: 0 0 auto;
    font-weight: 500;
    letter-spacing: .0892857143em;
    justify-content: center;
    outline: 0;
    position: relative;
    text-decoration: none;
    text-indent: .0892857143em;
    text-transform: uppercase;
    transition-duration: .28s;
    transition-property: box-shadow,transform,opacity;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;

    color: #FFF;
    background-color: #33C3F0;
    border-color: #33C3F0;

  input
    border-radius: 50px;
    border-color: #e2e2e2;
    padding: 8px;
    border-width: 1px;
    border-style: solid;
  input:focus
    border-color #ff3a72
  *:focus
    outline none
</style>
