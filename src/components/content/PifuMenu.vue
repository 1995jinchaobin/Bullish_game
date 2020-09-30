<template>
  <div class="pifu">
    <div class="left">
      <div class="topL" :style="{'background-color':background.lt}"></div>
      <div class="bottomL" :style="{'background-color':background.lb}"></div>
    </div>
    <div class="right">
      <div class="topR" :style="{'background-color':background.rt}"></div>
      <div class="bottomR"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PifuMenu',
  props: ['background'],
  data () {
    return {
      borderC: { border: '1px solid green' }
    }
  }
}
</script>

<style lang="scss" scoped>
.pifu{
  border: 1px solid white;
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
  padding: 1px;
  .left{
    width: 2vw;
    .topL{
      height: 2vw;
    }
    .bottomL{
      height: 4vw;
    }
  }
  .right{
    width: 6vw;
    .topR{
      height: 2vw;
    }
    .bottomR{
      width: 6vw;
      height: 4vw;
      background-color: #F2F2F2;
    }
  }
}
.pifu:hover{
  border:1px solid green;
}
.pifu:active{
  border:1px solid green;
}
</style>
