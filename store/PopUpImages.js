
export const state = () => ({
    images: [],
    index: 0,
  });
  
  export const mutations = {
    set(state, data) {
      state.images = data;
    },
    setIndex(state, data) {
      state.index = data;
    },
  };
  
  export const actions = {
    set({ commit }, data) {
      commit('set', data.images);
      commit('setIndex', data.index);
    },
  };
  
  export const getters = {
    images(state) {
      return state.images;
    },
    index(state) {
      return state.index;
    },
  };
  