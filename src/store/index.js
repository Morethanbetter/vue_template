// src/store/index.js
import { createStore } from 'vuex'

export default createStore({
  state: {
    config: {
      text: {
        provider: 'openai',
        apiKey: ''
      },
      image: {
        provider: 'openai',
        apiKey: ''
      },
      tts: {
        provider: 'openai',
        apiKey: ''
      }
    }
  },
  mutations: {
    updateConfig(state, config) {
      state.config = {
        ...state.config,
        ...config
      }
    }
  },
  actions: {
    async initializeConfig({ commit }) {
      // Load config from localStorage if exists
      const savedConfig = localStorage.getItem('llm-config')
      if (savedConfig) {
        commit('updateConfig', JSON.parse(savedConfig))
      }
    }
  }
})