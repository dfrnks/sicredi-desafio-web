<template>
  <div>
    <div class="row">
      <label>
        Data criação: {{ createdAt | date }}
      </label>
    </div>
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
      <button v-on:click="$router.back()">Voltar</button>
      <button v-on:click="register">Alterar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Change",
  data: () => ({
    createdAt: '',
    name: '',
    type: '',
  }),
  created() {
    let self = this
    this.$axios.get("/dragon/" + this.$route.params.id)
      .then((r) => {
        self.createdAt = r.data.createdAt
        self.name = r.data.name
        self.type = r.data.type
      })
  },
  methods: {
    register() {
      let self = this
      this.$axios.put("/dragon/" + this.$route.params.id, {
        name: this.name,
        type: this.type
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
    button
      margin 5px
</style>
