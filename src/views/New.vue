<template>
  <div>
    <div class="row">
      <label>
        Nome:
        <input v-model="name" type="text" placeholder="Nome">
      </label>
    </div>
    <div class="row">
      <label>
        Tipo:
        <input v-model="type" type="text" placeholder="Tipo">
      </label>
    </div>
    <div class="row">
      <label>
        Historia:
        <input v-model="history" type="text" placeholder="Historia">
      </label>
    </div>
    <div class="row">
      <button v-on:click="register">Cadastrar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "New",
  data: () => ({
    name: '',
    type: '',
    history: ''
  }),
  methods: {
    register() {
      let self = this
      this.$axios.post("/dragon", {
        name: this.name,
        type: this.type,
        history: this.history
      })
        .then(function () {
          self.$router.push({
            name: "Home"
          })
        })
    }
  }
}
</script>

<style scoped lang="stylus">
  .row
    margin 5px
</style>
