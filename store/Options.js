// import axios from 'axios';

export const state = () => ({
  options: false,
  headerStyle: 'trans',
});

export const mutations = {
  set(state, data) {
    state.options = data;
  },
  setHeaderStyle(state, data) {
    state.headerStyle = data;
  },
};

export const actions = {
  async get({ commit, state }, locale) {
    // if (state.options === false) {
      const data = await this.$axios.$get(`/wp-json/data/v1/get_options/?lang=${locale}`)
      commit('set', data);
    // }
  },
};

export const getters = {
  options(state) {
    return state.options;
  },
  headerStyle(state) {
    return state.headerStyle;
  },
};
