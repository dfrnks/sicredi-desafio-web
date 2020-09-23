<template>
  <div>
    <div class="info">
      <div>Data Criação</div>
      <div>Nome</div>
      <div>Tipo</div>
    </div>

    <div class="dragons" v-for="dragon in dragonsOrder" :key="dragon.id">
      <div class="info">
        <div>{{ dragon.createdAt | date }}</div>
        <div>{{ dragon.name }}</div>
        <div>{{ dragon.type }}</div>
      </div>
      <div class="action">
        <div><button v-on:click="remover(dragon.id)">Remover</button></div>
        <div><button v-on:click="$router.push('/change/' + dragon.id)">Alterar</button></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    dragons: [],
  }),
  computed: {
    dragonsOrder () {
      let sorting = -1
      return this.dragons.slice().sort((a, b) => a.name < b.name ? sorting : -sorting)
    }
  },
  created() {
    let self = this
    this.$axios.get("/dragon")
    .then(function (r) {
      self.dragons = r.data
    })
  },
  methods: {
    remover(id) {
      let self = this
      this.$axios.delete("/dragon/" + id)
        .then(function () {
          self.$axios.get("/dragon")
            .then(function (r) {
              self.dragons = r.data
            })
        })
    }
  }
}
</script>

<style scoped lang="stylus">
  .action div
    display inline-flex

  .info div
    display inline-flex
    padding 5px 10px
</style>
