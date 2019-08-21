<template>
  <div id="voltage-list">
    <div class="voltage-column">
      <div class="voltage-value" v-for="(v, index, i) in voltageList" :key="'v' + index" v-show="i<5" >
        <span :class="{'digits10': index === 'v10'}">{{index}}: </span> {{v | float}} V
      </div>
    </div>
    <div class="voltage-column">
      <div class="voltage-value" v-for="(v, index, i) in voltageList" :key="'v' + index" v-show="i>=5" >
        <span :class="{'digits10': index === 'v10'}">{{index}}: </span> {{v | float}} V
      </div>
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
    },
    cFirst() {
      return "";
    }
  },
}
</script>
