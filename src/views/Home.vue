<template>
  <div>
    <div>
      <div class="dragons" v-for="dragon in dragonsOrder" :key="dragon.id">
        <div class="name">{{ dragon.id }} - {{ dragon.name }}</div>
        <button v-on:click="remover(dragon.id)">Remover</button>
        <button v-on:click="$router.push('/change/' + dragon.id)">Alterar</button>
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
  .dragons
    width 80%
    background white
    margin 5px auto
    padding 5px
    button
      padding 0 5px
    .name
      width 60%
  .dragons  *
    display inline-flex
    margin-left 5px

  @media screen and (max-device-width: 840px)
    .dragons
      width 95%
      .name
        width 40%
</style>
