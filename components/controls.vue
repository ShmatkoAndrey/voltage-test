<template>
  <div id="controls">
      <nuxt-link :to="localePath('index')" class="button--green">{{$t('vt')}}</nuxt-link>
      <nuxt-link :to="localePath('chart')" class="button--green">{{$t('ch')}}</nuxt-link>
      <nuxt-link :to="localePath('validation')" class="button--green">{{$t('txt')}}</nuxt-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>