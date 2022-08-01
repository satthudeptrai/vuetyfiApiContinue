const state = {
  test: {
    name: 'anh',
    atribute: 'deptrai'
  }
};
const getters = {
  test: s => {
    return s.test;
  }
};
const mutations = {
  setTest: (s, value) => {
    s.test = value;
  }
};
const actions = {
  setTest: ({commit}, value) => {
    commit('setTest', value)
  }
};
export default {
  state,
  getters,
  mutations,
  actions
}