export const state = () => ({
  voltageList: {
    v1: 5.2,
    v2: 5,
    v3: 4.8,
    v4: 4.6,
    v5: 5.3,
    v6: 5.5,
    v7: 5,
    v8: 5.3,
    v9: 4.7,
    v10: 5.1,
  }
})

export const mutations = {
  changeVoltage (state, data) {
    state.voltageList[data.name] = data.value;
  }
}

export const actions = {
  randomizeAll({state, commit}) {
    setInterval(() => {
      Object.keys(state.voltageList).forEach((e) => {
        commit('changeVoltage', {name: e, value: getRandom(3,6) })
      })
    }, 1000)
  }
}

export const getters = {
  voltageList(state) {
    return state.voltageList;
  }
}

var getRandom = function(min, max) {
  return Math.random() * (max - min) + min;
}