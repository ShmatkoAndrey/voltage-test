<template>
  <section class="container">
    <div>
      <div class="lang">
        <nuxt-link :to="switchLocalePath('en')">En</nuxt-link>
        <nuxt-link :to="switchLocalePath('ru')">Ru</nuxt-link>
      </div>
      <div class="expand" @click="expand">
        <font-awesome-icon :icon="['fas', 'expand']" size="lg"  :style="{ color: 'dimgrey' }"/>
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
    Controls,
  },
  methods: {
    zeroIt() {
      this.$store.dispatch('voltage/zeroVoltage')
    },
    expand() {
      var elem = document.documentElement;

      if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
          document.msExitFullscreen();
        }
        }
      else {
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
          elem.msRequestFullscreen();
        }
      }
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