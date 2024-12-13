// import axios from 'axios';

export const state = () => ({
    windowHeight: false,
    windowWidth: false,
  });
  
  export const mutations = {
    setHeight(state, data) {
      state.windowHeight = data;
    },
    setWidth(state, data) {
      state.windowWidth = data;
    },
  };
  
  export const actions = {
  
  };
  
  export const getters = {
    windowHeight(state) {
      return state.windowHeight;
    },
    windowWidth(state) {
      return state.windowWidth;
    },
  };
  