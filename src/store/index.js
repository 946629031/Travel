import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) // 通过 Vue.use() 来使用插件

let city = '上海'
try {
  if (localStorage.city) {
    city = localStorage.city
  }
} catch (e) {}

export default new Vuex.Store({
  state: {
    city: city
  },
  actions: {
    changeCity (ctx, city) {
      ctx.commit('changeCity', city) // 通过 ctx.commit 调用 mutations 里的 changeCity
    }
  },
  mutations: {
    changeCity (state, city) {
      state.city = city // mutations 调用 state, 将其重新赋值

      try {
        localStorage.city = city
      } catch (e) {}
    }
  }
})
