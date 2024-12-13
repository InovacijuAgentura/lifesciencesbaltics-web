export const actions = {
  async nuxtServerInit({ dispatch, commit }, { app, payload }) {
  	const locale = app.i18n.locale;
   //console.log(payload);
    if (payload && typeof payload === 'object' && Object.keys(payload).length > 0 && payload.menu && payload.options && Object.keys(payload.menu).length > 0 && Object.keys(payload.options).length > 0 ){ 
        commit('Menu/set', payload.menu);
        commit('Options/set', payload.options);
      
    } else {
   		await dispatch('Menu/get', locale);
    	await dispatch('Options/get', locale);
	}
  }
};
