// import Axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
    power: []
  },
  mutations: {
    setPower (state, obj) {
      console.log(obj)
      state.power = obj
      console.log(state)
    },
    // 保存用户信息
    setUser (state, data) {
      state.userInfo = data
      sessionStorage.setItem('userInfo', JSON.stringify(data))
    },
    // 退出登录
    userOut (state) {
      state.userInfo = null
      sessionStorage.removeItem('userInfo')
    },
    getPower (state, obj) {
      state.power = obj.data.data.authority_modul
    }
    // 保存用户信息
    // setUserInfo (state, obj) {
    //   console.log(obj)
    //   state.userInfo = obj
    // },
    // async getPower (state, params) {
    //   console.log(params)
    //   const { data: res } = await axios.get('admin/login', { params: params })
    //   console.log(res)
    //   if (res.code !== 100) return
    //   state.power = res.data.authority_modul
    //   console.log(state.power)
    //   window.sessionStorage.setItem('userInfo', JSON.stringify(params))
    //   this.$router.push('/home')
    // }
  },
  actions: {
    login (context, params) {
      console.log(params)
      axios.get('admin/login', { params: params }).then(res => {
        console.log(res)
        if (res.data.code !== 100) {
          console.log('登录失败')
          return
        }
        context.commit('getPower', res)
        // this.$message.success('登录成功')
      }).catch(err => { console.log(err) })
      // console.log(1)
    // 登录
    // getAdmin (context, params) {
    //   // console.log(params)
    //   context.commit('getPower', params)
    }
  },
  modules: {
  },
  getters: {
    userInfo (state) {
      if (!state.userInfo) {
        state.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
      }
      return state.userInfo
    }
  }
})
// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// const actions = {}
// const mutations = {
//   handleUserName: (state, user_name) => {
//     state.user_name = user_name
//       // 把登录的用户的名保存到localStorage中，防止页面刷新，导致vuex重新启动，用户名就成为初始值（初始值为空）的情况
//     localStorage.setItem('user_name', user_name)
//   }
// }
// const state = {
//   user_name: '' || localStorage.getItem('user_name')
// }
// // getters 只会依赖 state 中的成员去更新
// const getters = {
//   userName: (state) => state.user_name
// }

// const store = new Vuex.Store({
//   actions,
//   mutations,
//   state,
//   getters
// })
// export { store }
