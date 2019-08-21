<template>
  <section class="container">
    <div>
      <div class="lang">
        <nuxt-link :to="switchLocalePath('en')">En</nuxt-link>
        <nuxt-link :to="switchLocalePath('ru')">Ru</nuxt-link>
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
  }
}
</script>
