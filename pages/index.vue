<template>
  <section class="container">
    <div>
      <div class="lang">
        <nuxt-link :to="switchLocalePath('en')">En</nuxt-link>
        <nuxt-link :to="switchLocalePath('ru')">Ru</nuxt-link>
      </div>
      <div class="table-name">
        <h3>{{$t('sensor')}}</h3>
        <div @click="zeroIt()" class="button--grey">{{$t('zero')}}</div>
      </div>
      <voltage-list />
      <controls />
    </div>
  </section>
</template>

<script>
import VoltageList from './../components/VoltageList'
import Controls from './../components/controls'

export default {
  components: {
    VoltageList,
    Controls
  },
  methods: {
    zeroIt() {
      this.$store.dispatch('voltage/zeroVoltage')
    }
  }
}
</script>

<style>
.table-name {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.button--grey {
  cursor: pointer;
}
</style>