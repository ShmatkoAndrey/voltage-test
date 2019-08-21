<template>
  <div id="voltage-chart">
    <chart :data="data" :labels="labels" :options="options" />
  </div>
</template>

<script>

export default {
  name: "voltage-list",
  data() {
    return {
      options: {
        scales: {
          yAxes: [{
            ticks: {
              // beginAtZero: true   // minimum value will be 0.
            }
          }]
        }
      }
    }
  },
  computed: {
    voltageList: {
      get() {
        return this.$store.getters['voltage/voltageList'];
      },
      deep: true
    },
    data() {
      let data =  [
        {
          label: 'Voltage',
          backgroundColor: 'tomato',
          data: Object.values(this.voltageList).map(e => e)
        }
      ]
      return data;
    },
    labels() {
      return Object.keys(this.voltageList);
    }
  }
}
</script>
