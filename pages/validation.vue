<template>
  <section class="container">
    <div>
      <div class="lang">
        <nuxt-link :to="switchLocalePath('en')">En</nuxt-link>
        <nuxt-link :to="switchLocalePath('ru')">Ru</nuxt-link>
      </div>
      <some-input />
      <controls />
    </div>
  </section>
</template>

<script>
import SomeInput from './../components/SomeInput'
import Controls from './../components/controls'

export default {
  components: {
    SomeInput,
    Controls
  }
}
</script>
