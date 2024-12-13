import Cookies from 'js-cookie';
export const state = () => {
  return {
    wishlist: [],
  }
};

export const mutations = {
    getInfoFromCookie(state) {
        let wishlistCookie = Cookies.get('wishlist');
        if (!wishlistCookie) {
            wishlistCookie = [];
        } else {
            wishlistCookie = JSON.parse(wishlistCookie);
        }
        state.wishlist = wishlistCookie;
    },
    setWishlist(state, data) {
        if(state.wishlist.includes(data.id)) {
            state.wishlist.splice(state.wishlist.indexOf(data.id), 1);
        } else {
            state.wishlist.push(data.id);
        }
        Cookies.set('wishlist', JSON.stringify(state.wishlist), { expires: 7 });
    }
};

export const actions = {


};

export const getters = {
  wishlist(state) {
    return state.wishlist;
  },
};
