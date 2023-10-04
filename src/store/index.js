import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";
import Search from '@/api/Search';

export default createStore({
  state: {
    isLoading: false,
    users: [],
    error: null,
  },
  getters: {
    isLoading: (state) => state.isLoading,
    users: (state) => state.users,
    error: (state) => state.error,
  },
  mutations: {
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setUser(state, users) {
      state.users = users
    },
    cleanError(state) {
      state.error = null;
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    GET_USERS: async ({commit}) => {
      commit('setLoading', true);
      commit('cleanError');
  
      try {
        const { data } = await Search.getUser();
        
        console.log(data)
        commit('setUser', data);
        
        return true;
      } catch (e) {
        if (/403/.test(e.message)) {
          commit('setError', e.message
          );
          return;
        }
        commit('setError', e.message);
      } finally {
        commit('setLoading', false);
      }
    },
  },
  plugins: [createPersistedState({
    key: 'jilfond',
    paths: [],
  })],
});