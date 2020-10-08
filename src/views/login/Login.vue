<template>
<div class="login">
  <input type="text" v-model="user.adminName">
  <input type="text" v-model="user.adminPassword">
  <el-button @click="loginBtn">登录</el-button>
</div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        adminName: 'admin',
        adminPassword: 'admin'
      }
    }
  },
  methods: {
    async loginBtn () {
      const { data: res } = await this.$http.get('admin/login', { params: this.user })
      console.log(res)
      if (res.code !== 100) return this.$message.error('登录失败')
      // this.$store.commit('setUser', this.user)
      // await this.$store.dispatch('login', this.user)
      // console.log(this.$store.state.power)
      // if (this.$store.state.power.length === 0) return this.$message.error('登录失败')
      this.$store.commit('setPower', res.data.authority_modul)
      this.$store.commit('setUser', this.user)
      this.$message.success('登录成功')
      this.$router.push({ name: 'Home' })

      // this.$router.push({ name: 'Home' })
      // console.log(this.$store.state.power)
    }
  }
}
</script>

<style>

</style>
