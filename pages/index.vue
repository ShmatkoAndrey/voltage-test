<template>
  <section class="container">
    <div>
      <div class="table-name">
        <h3>{{$t('sensor')}}</h3>
        <div @click="zeroIt()" class="button--grey">{{$t('zero')}}</div>
      </div>
      <voltage-list />
    </div>
  </section>
</template>

<script>
import VoltageList from './../components/VoltageList'
import Controls from './../components/controls'

export default {
  components: {
    VoltageList,
    Controls,
  },
  methods: {
    zeroIt() {
      this.$store.dispatch('voltage/zeroVoltage')
    },
  }
}
</script>

<style>

.button--grey {
  cursor: pointer;
}
</style>