<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
  },
  beforeCreate () {
    // if (window.sessionStorage.getItem('userInfo')) {
    //   this.$store.state.userInfo = JSON.parse(window.sessionStorage.getItem('userInfo'))
    // console.log(this.$store.state.userInfo)
    // console.log(this.$store.state.power)
    // console.log(111)
    // this.$store.dispatch('getAdmin', this.$store.state.userInfo)
    // }
  },
  created () {
    // 在页面加载时读取sessionStorage里的状态信息
    // if (window.sessionStorage.getItem('userInfo') && this.$store.state.power === []) {
    //   const user = JSON.parse(window.sessionStorage.getItem('userInfo'))
    //   this.$store.dispatch('getAdmin', user)
    // window.sessionStorage.removeItem('userInfo')
    // }
    // 在页面刷新时将vuex里的信息保存到sessionStorage里
    // window.addEventListener('beforeunload', () => {
    //   window.sessionStorage.setItem('userInfo', JSON.stringify(this.$store.state.userInfo))
    // })
  }
}
</script>

<style lang="scss">
</style>
