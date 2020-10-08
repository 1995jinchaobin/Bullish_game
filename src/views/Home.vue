<template>
  <div class="main">
    <el-container style="height: 100vh">
      <el-aside>
        <el-menu
          :default-active="'/'+urlActive"
          router
          unique-opened
          :background-color="bgcList[pifuIndex].bgc.lb"
          text-color="#C2C6CD"
          active-text-color="#fff">
          <div class="title" @click="jumpHome" :style="{'background-color':bgcList[pifuIndex].bgc.lt}">牛气冲天</div>
          <!-- 一级菜单 -->
          <el-submenu
            :index="item.id+''"
            v-for="item in SideBarList"
            :key="item.id">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.modulName}}</span>
            </template>
            <!-- 二级菜单 -->
            <!-- <el-menu-item-group> -->
              <!-- <template slot="title">分组一</template> -->
              <el-menu-item
                :index="'/'+item2.url"
                v-for="item2 in item.vos"
                :key="item2.id"
                :style="{'background-color':item2.url===urlActive?bgcList[pifuIndex].bgc.lt:bgcList[pifuIndex].bgc.lb}"
                @click="erJiMenu(item2.id,item2.modulName,item2.url)">{{item2.modulName}}
              </el-menu-item>
              <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
            <!-- </el-menu-item-group> -->
            <!-- <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group> -->
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧视图 -->
      <el-container>
        <!-- 头部区域 -->
        <el-header>
          <div class="hearderTop" :style="{color:pifuIndex>9?'#fff':'#000','background-color':bgcList[pifuIndex].bgc.rt}">
            <div class="left">
              <div>
                <i class="el-icon-s-fold"></i>
                <span class="tiShi">侧边伸缩</span>
              </div>
              <div>
                <i class="iconfont icon-wangluo1"></i>
                <span class="tiShi">前台</span>
              </div>
              <div>
                清除测试数据
              </div>
              <div>
                <i class="el-icon-refresh-right"></i>
                <span class="tiShi">刷新</span>
              </div>
            </div>
            <div class="right">
              <div>
                <i class="el-icon-bell"></i>
                <span class="tiShi">消息中心</span>
              </div>
              <div @click="drawer=true">
                <i class="iconfont icon-huaban"></i>
                <span class="tiShi">换肤</span>
              </div>
              <div>
                <i class="iconfont icon-biaoqian"></i>
                <span class="tiShi">便签</span>
              </div>
              <div>
                <i class="iconfont icon-xianxingtubiao_huabanfuben"></i>
                <span class="tiShi">放大</span>
              </div>
              <div>功能模拟
                <i class="el-icon-caret-bottom"></i>
                <i class="el-icon-caret-top"></i>
                <div class="gongNengNN">
                  <ul>
                    <li>检测赠送转盘卷</li>
                    <li>检测视频次数</li>
                    <li>检测摇一摇次数</li>
                    <li>检测每日分红</li>
                  </ul>
                </div>
              </div>
              <div>清除缓存
                <i class="el-icon-caret-bottom"></i>
                <i class="el-icon-caret-top"></i>
                <div class="clearHC">
                  <ul>
                    <li>清除模板缓存</li>
                    <li>清除数据缓存</li>
                    <li>清除配置缓存</li>
                    <li>清除数据库缓存</li>
                    <li>清除所有缓存</li>
                  </ul>
                </div>
              </div>
              <div>admin
                <i class="el-icon-caret-bottom"></i>
                <i class="el-icon-caret-top"></i>
                 <div class="admin">
                    <ul>
                      <li>基本资料</li>
                      <li>退出</li>
                    </ul>
                  </div>
              </div>
              <el-drawer
                :append-to-body="true"
                :visible.sync="drawer"
                :with-header="false">
                <div class="pifuTitle">配色方案</div>
                <div class="pifuTu">
                  <pifu-menu
                    :background="item.bgc"
                    v-for="(item,index) in bgcList"
                    :key="index"
                    :style="index===pifuIndex?borderC:''"
                    @click.native="pifuMenu(index)"></pifu-menu>
                </div>
              </el-drawer>
            </div>
          </div>
          <div class="hearderB">
            <i class="el-icon-d-arrow-left" @click="leftIcon"></i>
            <i
              class="el-icon-s-home"
              :class="indexTag===-1?'tagActive':''"
              @click="pushHome">
            </i>
            <div :class="tagRight===true?'tagRight':''" ref="fatherBox">
              <el-tag
                ref="childrenBox"
                :class="index===indexTag?'tagActive':''"
                :key="item.id"
                v-for="(item,index) in tagList"
                closable
                @close="handleClose(item.id)"
                @click="tagBtn(item.url)">
                {{item.value}}
              </el-tag>
            </div>
            <!-- <ul>
              <li v-for="item in tagList" :key="item.id">{{item.value}}<i class="el-icon-close"></i></li>
            </ul> -->
            <i class="el-icon-d-arrow-right" @click="rightIcon"></i>
            <i class="el-icon-arrow-down"></i>
            <div class="tagHover">
              <ul>
                <li>关闭当前标签页</li>
                <li>关闭其他标签页</li>
                <li>关闭全部标签页</li>
              </ul>
            </div>
          </div>
        </el-header>
        <el-main>
          <div class="neibu">
            <router-view />
            <!-- <color-picker></color-picker> -->
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import PifuMenu from '@/components/content/PifuMenu'
export default {

  components: { PifuMenu },
  data () {
    return {
      tagRight: false,
      // 导航高亮
      urlActive: 'home/controller',
      // 标签默认索引
      indexTag: -1,
      activeId: null,
      pifuIndex: window.localStorage.getItem('color') | null,
      borderC: { border: '1px solid green' },
      bgcList: [
        { id: 1, bgc: { lt: '#00877A', lb: '#20222A', rt: '#FFFFFF' } },
        { id: 2, bgc: { lt: '#3582E6', lb: '#03152A', rt: '#FFFFFF' } },
        { id: 3, bgc: { lt: '#94785C', lb: '#2E241B', rt: '#FFFFFF' } },
        { id: 4, bgc: { lt: '#6E456F', lb: '#482C47', rt: '#FFFFFF' } },
        { id: 5, bgc: { lt: '#1B8FE6', lb: '#2F3A4F', rt: '#FFFFFF' } },
        { id: 6, bgc: { lt: '#56A66C', lb: '#343742', rt: '#FFFFFF' } },
        { id: 7, bgc: { lt: '#DE7700', lb: '#1D1F26', rt: '#FFFFFF' } },
        { id: 8, bgc: { lt: '#992C2B', lb: '#242E38', rt: '#FFFFFF' } },
        { id: 9, bgc: { lt: '#00877A', lb: '#20222A', rt: '#FFFFFF' } },
        { id: 10, bgc: { lt: '#00877A', lb: '#1D1F26', rt: '#FFFFFF' } },
        { id: 11, bgc: { lt: '#1B8FE6', lb: '#2F3A4F', rt: '#1B8FE6' } },
        { id: 12, bgc: { lt: '#00877A', lb: '#1D1F26', rt: '#333742' } },
        { id: 13, bgc: { lt: '#6E456F', lb: '#482C47', rt: '#482C47' } },
        { id: 14, bgc: { lt: '#992C2B', lb: '#242E38', rt: '#992C2B' } },
        { id: 15, bgc: { lt: '#00877A', lb: '#242E38', rt: '#00877A' } }
      ],
      drawer: false,
      SideBarList: [
        // {
        //   id: 1,
        //   value: '主页',
        //   children: [
        //     { id: 11, value: '系统控制台', url: 'home/systemconsole' }
        //   ]
        // },
        // {
        //   id: 2,
        //   value: '会员管理系统',
        //   children: [
        //     { id: 21, value: '所有会员列表', url: 'member/list' },
        //     { id: 22, value: '会员动态日志', url: 'member/log' },
        //     { id: 23, value: '会员银行列表', url: 'member/banklist' },
        //     { id: 24, value: '留言列表', url: 'member/messagelist' },
        //     { id: 25, value: '收款二维码', url: 'member/collectioncode' },
        //     { id: 26, value: '直推树状图', url: 'member/tree' },
        //     { id: 27, value: '直推网络图', url: 'member/internet' }
        //   ]
        // },
        // {
        //   id: 3,
        //   value: '实名列表管理',
        //   children: [
        //     { id: 31, value: '实名列表', url: 'realname/list' }
        //   ]
        // },
        // {
        //   id: 4,
        //   value: '人物管理系统',
        //   children: [
        //     { id: 41, value: '人物列表', url: 'character/list' },
        //     { id: 42, value: '会员人物列表', url: 'character/memberlist' },
        //     { id: 43, value: '会员购买列表', url: 'character/memberbuylist' }
        //   ]
        // },
        // {
        //   id: 15,
        //   value: '网站参数设置',
        //   children: [
        //     { id: 51, value: '基本信息管理', url: 'website/baseinfo' },
        //     { id: 52, value: '短信参数配置', url: 'website/smsparams' },
        //     { id: 53, value: '安全参数配置', url: 'website/safeparams' },
        //     { id: 54, value: '登录参数配置', url: 'website/loginparams' },
        //     { id: 55, value: '注册参数配置', url: 'website/registerparams' },
        //     { id: 56, value: '支付参数配置', url: 'website/payparams' },
        //     { id: 57, value: '广告信息管理', url: 'website/adinfo' },
        //     { id: 58, value: '阶段收入参数', url: 'website/incomeparams' },
        //     { id: 59, value: '海报信息管理', url: 'website/posterinfo' }
        //   ]
        // },
        // {
        //   id: 14,
        //   value: '会员等级管理',
        //   children: [
        //     { id: 41, value: '实名列表管理', url: 'system' },
        //     { id: 42, value: '人物管理系统', url: 'system' }
        //   ]
        // },
        // {
        //   id: 5,
        //   value: '奖金管理系统',
        //   children: [
        //     { id: 51, value: '实名列表管理', url: 'system' },
        //     { id: 52, value: '人物管理系统', url: 'system' }
        //   ]
        // },
        // {
        //   id: 6,
        //   value: '企业信息管理',
        //   children: [
        //     { id: 61, value: '实名列表管理', url: 'system' },
        //     { id: 62, value: '人物管理系统', url: 'system' }
        //   ]
        // },
        // {
        //   id: 7,
        //   value: '用户资产管理',
        //   children: [
        //     { id: 71, value: '实名列表管理', url: 'system' },
        //     { id: 72, value: '人物管理系统' }
        //   ]
        // },
        // {
        //   id: 8,
        //   value: '转盘抽奖系统',
        //   children: [
        //     { id: 21, value: '实名列表管理', url: 'system' },
        //     { id: 22, value: '人物管理系统', url: 'system' }
        //   ]
        // },
        // {
        //   id: 9,
        //   value: '游戏资料管理',
        //   children: [
        //     { id: 21, value: '实名列表管理', url: 'system' },
        //     { id: 22, value: '人物管理系统', url: 'system' }
        //   ]
        // },
        // {
        //   id: 10,
        //   value: '广告综合管理',
        //   children: [
        //     { id: 21, value: '实名列表管理', url: 'system' },
        //     { id: 22, value: '人物管理系统', url: 'system' }
        //   ]
        // },
        // {
        //   id: 11,
        //   value: '系统权限管理',
        //   children: [
        //     { id: 21, value: '实名列表管理', url: 'system' },
        //     { id: 22, value: '人物管理系统', url: 'system' }
        //   ]
        // }
      ],
      // 标签页
      tagList: [
        // { id: 41, url: 'character/list', value: '人物列表' }
      ]
    }
  },
  created () {
    if (this.$store.state.power.length === 0 && window.sessionStorage.getItem('userInfo')) {
      const obj = window.sessionStorage.getItem('userInfo')
      // console.log(obj)
      // JSON.parse(obj)
      this.$store.dispatch('login', JSON.parse(obj))
      this.SideBarList = this.$store.state.power
      console.log(this.SideBarList)
    } else if (this.$store.state.power.length === 0 && !window.sessionStorage.getItem('userInfo')) {
      this.$router.push('/login')
    } else {
      this.SideBarList = this.$store.state.power
    }
    // this.SideBarList = this.$store.state.power
  },
  watch: {
    '$store.state.power': function () {
      console.log(this.SideBarList)
      console.log(this.$store.state.power)
      this.SideBarList = this.$store.state.power
    }
  },
  methods: {
    // 跳转主页
    jumpHome () {
      this.$router.push('/home')
    },
    // 皮肤点击显示边框
    pifuMenu (value) {
      console.log(value)
      this.pifuIndex = value
      window.localStorage.setItem('color', this.pifuIndex)
    },
    // 二级菜单点击
    erJiMenu (id, value, url) {
      this.activeId = id
      this.urlActive = url
      console.log(id)
      console.log(value)
      console.log(url)
      const a = {
        id,
        value,
        url
      }
      const index = this.tagList.findIndex(item => {
        return item.id === a.id
      })
      console.log(index)
      this.indexTag = index
      // 添加标签
      if (index === -1 && a.id !== 11) {
        this.tagList.push(a)
        this.indexTag = this.tagList.length - 1
      }
      console.log(this.tagList)
    },
    // 关闭标签
    handleClose (tag) {
      const index = this.tagList.findIndex(item => {
        return item.id === tag
      })
      // console.log(tag)
      // console.log(this.indexTag) // 2
      // console.log(this.tagList.length) // 3
      // console.log(this.indexTag === this.tagList.length - 1)
      const gl = this.indexTag
      // const index = this.tagList.indexOf(value)
      const al = this.tagList.length
      // const rt = this.tagList[gl].url
      console.log(index)
      console.log(gl)
      console.log(al)
      if (al === 1) {
        this.$router.push('/home/controller')
        this.tagList.splice(index, 1)
        this.urlActive = 'home/controller'
        return
      }
      if (gl === index && index === al - 1) {
        this.indexTag -= 1
        this.urlActive = this.tagList[gl - 1].url
        // console.log(rt1)
        // this.$router.push('/' + this.urlActive)
      } else if (gl === index && gl !== al - 1) {
        this.urlActive = this.tagList[gl + 1].url
        // this.$router.push('/' + rt2)
        // console.log(rt2)
      } else if (gl > index) {
        this.indexTag -= 1
        this.urlActive = this.tagList[gl].url
        // this.$router.push('/' + rt1)
      } else {
        this.urlActive = this.tagList[gl].url
        // this.$router.push('/' + rt1)
      }
      this.$router.push('/' + this.urlActive)
      this.tagList.splice(index, 1)
      if (this.tagRight) {
        let b = 0
        for (let a = 0; a < this.tagList.length; a++) {
        // console.log(a)
          b += this.$refs.childrenBox[a].$el.clientWidth
        }
        const fatherBoxWidth = this.$refs.fatherBox.offsetWidth
        if (fatherBoxWidth >= b) {
          this.tagRight = false
        }
      }
    },
    // 点击标签切换导航菜单
    tagBtn (url) {
      const index = this.tagList.findIndex(item => {
        return item.url === url
      })
      console.log(index)
      this.indexTag = index
      console.log(url)
      this.urlActive = url
      this.$router.push('/' + url)
    },
    // 标签左移图标
    leftIcon () {
      this.tagRight = false
    },
    // 标签右移图标
    rightIcon () {
      let b = 0
      for (let a = 0; a < this.tagList.length; a++) {
        // console.log(a)
        b += this.$refs.childrenBox[a].$el.clientWidth
      }
      const fatherBoxWidth = this.$refs.fatherBox.offsetWidth
      if (fatherBoxWidth < b) {
        this.tagRight = true
      }
    },
    // 点击图标跳转首页
    pushHome () {
      this.indexTag = -1
      this.urlActive = 'home/controller'
      this.$router.push('/home/controller')
    }
  }
}
</script>
<style lang="scss">
// .el-menu-item.is-active {
//    background-color: rgb(231, 235, 240) !important;
// }
$top-hight: 50px;
$border:1px solid #f2f2f2;
.main{
  .el-menu {
    border-right: none !important;
    .title{
      color: rgba(255,255,255,0.8);
      font-weight:300;
      font-size: 16px;
      height: $top-hight;
      line-height: $top-hight;
      text-align: center;
      cursor: pointer;
    }
  }
  .el-header{
    height: $top-hight !important;
    padding: 0;
    .hearderTop{
      display: flex;
      justify-content: space-between;
      height: $top-hight;
      // border-bottom: 1px solid #f2f2f2;
      .left,.right{
        display:flex;
        div{
          // background-color: #fff;
          padding: 12px;
          cursor: pointer;
          line-height: 26px;
        }
        &>div:hover{
          border-top: 3px solid #20222A;
          padding-top:9px
        }
        div:hover div{
          display: inline-block;
        }
        div:hover .el-icon-caret-bottom{
          display: none;
        }
        div:hover .el-icon-caret-top{
          display: inline-block;
        }
        div:hover span{
        display: inline-block;
      }
      }
      i{
        font-size: 24px;
      }
      .el-icon-caret-bottom{
        font-size: 16px;
      }
      .el-icon-caret-top{
        display: none;
        font-size: 16px;
      }
      ul{
        color: #000;
        border: 1px solid #ccc;
        box-shadow: 0 0 5px #ccc;
        // display: none;
        background-color: #fff;
      }
      li{
        list-style-type: none;
        cursor: pointer;
        padding: 10px;
        text-align: center;
      }
      li:hover{
        background-color: #eee;
      }
      span{
        display: none;
      }
      .tiShi{
        position: absolute;
        font-size: 8px;
        // border: 1px solid #000;
        top: 0px;
      }
      .gongNengNN{
        position: absolute;
        top: $top-hight;
        right: 180px;
        z-index: 999;
        display: none;
      }
      .clearHC{
        position: absolute;
        right:80px;
        top:$top-hight;
        z-index: 999;
        display: none;
      }
      .admin{
        position: absolute;
        right: 10px;
        top: $top-hight;
        z-index: 999;
        display: none;
      }
    }
    .hearderB{
      position: relative;
      // border-top: 1px solid #f6f6f6;
      // left: 220px;
      // width: calc(100vw - 220px);
      // height: 40px;
      // background-color: chocolate;
      display: flex;
      &>i{
        width: 40px;
        text-align: center;
        font-size: 22px;
        line-height: 40px;
        border-right: $border;
        cursor: pointer;
      }
      &>div{
        display: flex;
        overflow: hidden;
        width: calc(100% - 160px);
      }
      .el-icon-arrow-down{
        position: absolute;
        right: 0;
      }
      .el-icon-d-arrow-right{
        position: absolute;
        right: 40px;
        border-left: $border;
      }
      .tagActive{
        background-color: #F6F6F6 !important;
        line-height:36px !important;
        border-top: 2px solid #344058 !important;
      }
      .tagRight{
        display: flex;
        justify-content: flex-end;
      }
    }
    .tagHover{
      top: 40px;
      width: 120px !important;
      position: absolute;
      right: 0;
      // display: none;
      ul{
        color: #000;
        border: 1px solid #ccc;
        box-shadow: 0 0 5px #ccc;
        background-color: #fff;
        list-style: none;
        display: none;
        li{
          cursor: pointer;
          padding: 10px;
          text-align: center;
        }
        li:hover{
          background-color: #eee;
        }
      }
    }
    .el-icon-arrow-down:hover + .tagHover ul{
      display: inline-block;
    }
    .tagHover:hover ul{
      display: inline-block;
    }
  }
  .el-main{
    background-color:#F2F2F2;
    margin-top: 40px;
    padding: 15px;
    .neibu{
      background-color: #fff;
      height: 100%;
    }
  }
}
.pifuTu{
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
  // 隐藏侧边菜单滚动条
.el-aside::-webkit-scrollbar {
  display: none;
}

// .el-header{
//   background-color: red;
// }
</style>
