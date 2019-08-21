<template>
  <section class="container">
    <div>
      <div class="lang">
        <nuxt-link :to="switchLocalePath('en')">En</nuxt-link>
        <nuxt-link :to="switchLocalePath('ru')">Ru</nuxt-link>
      </div>
      <voltage-chart />
      <controls />
    </div>
  </section>
</template>

<script>
import VoltageChart from './../components/VoltageChart'
import Controls from './../components/controls'

export default {
  components: {
    VoltageChart,
    Controls
  }
}
</script>
