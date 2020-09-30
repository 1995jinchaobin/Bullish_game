<template>
  <div class="main">
    <el-container style="height: 100vh">
      <el-aside>
        <el-menu
          default-active="2"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <h3>牛气冲天</h3>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧视图 -->
      <el-container>
        <!-- 头部区域 -->
        <el-header>
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
              <div>
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
            </div>
          </div>
        </el-header>
        <el-main>
          <div class="neibu">
            <!-- <router-view /> -->
            <color-picker></color-picker>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import ColorPicker from '@/components/content/colorPicker'
export default {

  components: { ColorPicker },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">
$top-hight: 50px;
.main{
  .el-header{
    height: $top-hight !important;
    .hearderTop{
      display: flex;
      justify-content: space-between;
      height: $top-hight;
      .left,.right{
        display:flex;
        div{
          background-color: #fff;
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
        border: 1px solid #000;
        top: 35px;
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
      //
      // font-size: 24px;
      //
      // cursor: pointer;
      // height: $top-hight;
    }
  }
}
//   // 隐藏侧边菜单滚动条
//   .el-aside::-webkit-scrollbar {
//     display: none;
//   }
</style>
