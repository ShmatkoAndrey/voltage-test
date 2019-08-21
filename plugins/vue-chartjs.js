import Vue from 'vue'
import { Bar } from 'vue-chartjs'

Vue.component('chart', {
  extends: Bar,
  props: ['data', 'labels', 'options'],
  mounted () {
    this.renderChart({labels: this.labels, datasets: this.data}, this.options)
  }
})