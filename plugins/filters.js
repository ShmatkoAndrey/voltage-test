import Vue from 'vue'

Vue.filter('float', val => Number(val).toFixed(2));
