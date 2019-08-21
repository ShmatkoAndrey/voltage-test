<template>
  <div id="voltage-list">
   <div class="voltage-value" v-for="(v, index) in voltageList" :key="'v' + index" >
     <span :class="{'digits10': index === 'v10'}">{{index}}: </span> {{v | float}} V
     </div>
  </div>
</template>

<script>
export default {
  name: "voltage-list",
  computed: {
    voltageList: {
      get() {
        return this.$store.getters['voltage/voltageList'];
      },
      deep: true
    }
  },
}
</script>
