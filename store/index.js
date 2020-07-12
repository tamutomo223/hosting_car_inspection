
export const state = () => ({
  language: {}
})

export const getters = {
  getLanguage: ({ language }) => language
}

export const mutations = {
  UPDATE_LANGUAGE_DATA(state, payload) {
    state.language = payload
  }
}


// export const actions = {
//   async fetchLanguagejson(payload) {
//     try {
//       const data = require(`../json/${payload}.json`)
//       if( data ){
//         commit('UPDATE_LANGUAGE_DATA', data)
//         console.log(data)
//       }
//     } catch (e) {
//       console.error(e)
//     }
//   }
// }
