// import axios from 'axios';

export const state = () => ({
  menu: false,
});

export const mutations = {
  set(state, data) {
    state.menu = data;
  },

};

export const actions = {
  async get({ commit, state }, locale) {
    //if (state.menu === false) {
      //this.$axios.setHeader('Authorization', '123')
      const data = await this.$axios.$get(`/wp-json/data/v1/get_menu/?lang=${locale}`)
      commit('set', data);
    //}
  },
};

export const getters = {
  menu(state) {
    return state.menu;
  },
};
