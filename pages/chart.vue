<template>
  <section class="container">
    <div>
      <voltage-chart />
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
