<template>
<div class="login">
  <el-button @click="loginBtn">登录</el-button>
</div>
</template>

<script>
export default {
  methods: {
    loginBtn () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style>

</style>
