import axios from 'axios'

const state = {
  cat: {}
}

const mutations = {
  setCat(state, data) {
    state.cat = data
  }
}

const actions = {
  //setDataTemplate
  setDataAction() {
    axios
      .post(
        'https://booked-10dfc.firebaseio.com/user.json?auth=KDfgnbLHUq1tpKCBERHaDevK2SDPGdHkv5XUjj1s',
        {
          firstName: 'mami',
          lastName: 'nakamura'
        }
      )
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  },
  // search({ commit }, inputText) {
  search({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get(
          'https://booked-10dfc.firebaseio.com/cat.json?auth=KDfgnbLHUq1tpKCBERHaDevK2SDPGdHkv5XUjj1s'
        )
        .then(response => {
          console.log(response)
          commit('setCat', response.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject({
            errorCode: 101,
            errorText: 'neko'
          })
        })
    })
  }
}

const getters = {
  getCats: state => {
    return state.cat
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
