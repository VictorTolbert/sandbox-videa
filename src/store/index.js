import Vue from 'vue'
import Vuex from 'vuex'

// import myRemoteService from './my-remote-service.js'

// import VuexFire from 'vuexfire'
// import Firebase from 'firebase'

Vue.use(Vuex)
// Vue.use(VuexFire)

const store = new Vuex.Store({
  state: {
    safelyStoredNumber: 0,
    version: '0.1.0',
    visibleHeader: false,
    visibleAffix: false,
    activeApp: null,
    hasError: false,
    marketCpp: 200,
    orderManagementRoute: false,
    reportingRoute: false,
    user: null,
    // token: null,
    // userInfo: {
    //   messages: [{1: 'test', 2: 'test'}],
    //   notifications: [],
    //   tasks: []
    // },
    user: {
      name: 'Seller User',
      email: 'seller@videa.tv'
    },
    selectedDaypart: 'early-morning',
    stationCallLetters: 'WVVV',
    share135001: 0.27,
    share133529: 0.49,
    share131642: 0.40,
    share131634: 0.35,
    share131542: 0.46,
    share134787: 0.21,
    settings: {
      stationAudienceShare: 0.3
    },
    counter: 0,
    _lang: 'en'
  },

  getters: {
    safelyStoredNumber: state => state.safelyStoredNumber,

    storedNumberMatches (state) {
      return matchNumber => {
        return state.safelyStoredNumber === matchNumber
      }
    }
    // Shorthand:
    // storedNumberMatches: state => matchNumber => state.safelyStoredNumbers === matchNumber
  },

  mutations: {
    UPDATE_USER (state, payload) {
      state.user = payload
    },
    TOGGLE_LOADING (state) {
      state.callingAPI = !state.callingAPI
    },
    TOGGLE_SEARCHING (state) {
      state.searching = (state.searching === '') ? 'loading' : ''
    },
    SET_USER (state, user) {
      state.user = user
    },
    SET_TOKEN (state, token) {
      state.token = token
    },

    increment (state) {
      state.counter++
    },

    toggle (state, key) {
      state[key] = !state[key]
    },

    incrementStoredNumber (state) {
      state.safelyStoredNumber++
    },

    setStoredNumber (state, newNumber) {
      // newNumber is the payload passed in.
      state.safelyStoredNumber = newNumber
    },

    changeActiveApp (state) {
    }
  },

  actions: {}
})

export default store
