<template>
  <div class="main">
    <el-container style="height: 100vh">
      <el-aside>
        <el-menu
          default-active='/realname/list'
          router
          unique-opened
          :background-color="bgcList[pifuIndex].bgc.lb"
          text-color="#C2C6CD"
          active-text-color="#fff">
          <h3>牛气冲天</h3>
          <!-- 一级菜单 -->
          <el-submenu
            :index="item.id+''"
            v-for="item in SideBarList"
            :key="item.id">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.value}}</span>
            </template>
            <!-- 二级菜单 -->
            <!-- <el-menu-item-group> -->
              <!-- <template slot="title">分组一</template> -->
              <el-menu-item
                :index="'/'+item2.url"
                v-for="item2 in item.children"
                :key="item2.id"
                :style="{'background-color':item2.id===activeId?bgcList[pifuIndex].bgc.lt:bgcList[pifuIndex].bgc.lb}"
                @click="erJiMenu(item2.id)">{{item2.value}}
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
        <el-header :style="{color:pifuIndex>9?'#fff':'#000','background-color':bgcList[pifuIndex].bgc.rt}">
          <div class="hearderTop">
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
        {
          id: 1,
          value: '主页',
          children: [
            { id: 11, value: '系统控制台', url: 'home/systemconsole' }
          ]
        },
        {
          id: 2,
          value: '会员管理系统',
          children: [
            { id: 21, value: '所有会员列表', url: 'member/list' },
            { id: 22, value: '会员动态日志', url: 'member/log' },
            { id: 23, value: '会员银行列表', url: 'member/banklist' },
            { id: 24, value: '留言列表', url: 'member/messagelist' },
            { id: 25, value: '收款二维码', url: 'member/collectioncode' },
            { id: 26, value: '直推树状图', url: 'member/tree' },
            { id: 27, value: '直推网络图', url: 'member/internet' }
          ]
        },
        {
          id: 3,
          value: '实名列表管理',
          children: [
            { id: 31, value: '实名列表', url: 'realname/list' }
          ]
        },
        {
          id: 4,
          value: '人物管理系统',
          children: [
            { id: 41, value: '人物列表', url: 'character/list' },
            { id: 42, value: '会员人物列表', url: 'character/memberlist' },
            { id: 43, value: '会员购买列表', url: 'character/memberbuylist' }
          ]
        },
        {
          id: 15,
          value: '网站参数设置',
          children: [
            { id: 51, value: '基本信息管理', url: 'website/baseinfo' },
            { id: 52, value: '短信参数配置', url: 'website/smsparams' },
            { id: 53, value: '安全参数配置', url: 'website/safeparams' },
            { id: 54, value: '登录参数配置', url: 'website/loginparams' },
            { id: 55, value: '注册参数配置', url: 'website/registerparams' },
            { id: 56, value: '支付参数配置', url: 'website/payparams' },
            { id: 57, value: '广告信息管理', url: 'website/adinfo' },
            { id: 58, value: '阶段收入参数', url: 'website/incomeparams' },
            { id: 59, value: '海报信息管理', url: 'website/posterinfo' }
          ]
        },
        {
          id: 14,
          value: '会员等级管理',
          children: [
            { id: 41, value: '实名列表管理', url: 'system' },
            { id: 42, value: '人物管理系统', url: 'system' }
          ]
        },
        {
          id: 5,
          value: '奖金管理系统',
          children: [
            { id: 51, value: '实名列表管理', url: 'system' },
            { id: 52, value: '人物管理系统', url: 'system' }
          ]
        },
        {
          id: 6,
          value: '企业信息管理',
          children: [
            { id: 61, value: '实名列表管理', url: 'system' },
            { id: 62, value: '人物管理系统', url: 'system' }
          ]
        },
        {
          id: 7,
          value: '用户资产管理',
          children: [
            { id: 71, value: '实名列表管理', url: 'system' },
            { id: 72, value: '人物管理系统' }
          ]
        },
        {
          id: 8,
          value: '转盘抽奖系统',
          children: [
            { id: 21, value: '实名列表管理', url: 'system' },
            { id: 22, value: '人物管理系统', url: 'system' }
          ]
        },
        {
          id: 9,
          value: '游戏资料管理',
          children: [
            { id: 21, value: '实名列表管理', url: 'system' },
            { id: 22, value: '人物管理系统', url: 'system' }
          ]
        },
        {
          id: 10,
          value: '广告综合管理',
          children: [
            { id: 21, value: '实名列表管理', url: 'system' },
            { id: 22, value: '人物管理系统', url: 'system' }
          ]
        },
        {
          id: 11,
          value: '系统权限管理',
          children: [
            { id: 21, value: '实名列表管理', url: 'system' },
            { id: 22, value: '人物管理系统', url: 'system' }
          ]
        }

      ]
    }
  },
  methods: {
    // 皮肤点击显示边框
    pifuMenu (value) {
      console.log(value)
      this.pifuIndex = value
      window.localStorage.setItem('color', this.pifuIndex)
    },
    // 二级菜单点击变色
    erJiMenu (value) {
      this.activeId = value
      console.log(value)
    }
  }
}
</script>
<style lang="scss">
// .el-menu-item.is-active {
//    background-color: rgb(231, 235, 240) !important;
// }
$top-hight: 50px;
.main{
  .el-menu {
    border-right: none !important;
  }
  .el-header{
    height: $top-hight !important;
    .hearderTop{
      display: flex;
      justify-content: space-between;
      height: $top-hight;
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
        div:hover ul{
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
        display: none;
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
      }
      .clearHC{
        position: absolute;
        right:80px;
        top:$top-hight;
        z-index: 999;
      }
      .admin{
        position: absolute;
        right: 10px;
        top: $top-hight;
        z-index: 999;
      }
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
