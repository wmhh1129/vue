<template>
  <div class="main-layout">
    <header>
      <div class="title">
        <span>LOCATION</span>
        <span><i class="iconfont icon-see_map"></i></span>
      </div>
      <ul class="nav">
        <li v-for="menu in navMenu" :key="menu.id">
          <router-link class="link" :to="menu.url">
            <span><i class="iconfont" :class="menu ? menu.icon : ''"></i></span>
            <span>{{menu.name}}</span>
          </router-link>
        </li>
      </ul>
      <div class="user-info">
        <el-menu mode="horizontal" background-color="#30b6cb" text-color="#fff">
          <el-submenu index="1">
            <template slot="title">
              <span style="color: #fff"><i class="iconfont icon-account"></i></span>
            </template>
            <el-menu-item index="1-1">用户信息</el-menu-item>
            <el-menu-item index="1-2">退出</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </header>
    <div class="main-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from '../basic/header'
  import { navMenu } from '../common/core.constants'

  export default {
    name: 'MainLayout',
    data () {
      return {
        navMenu: navMenu
      }
    },
    components: {
      Header
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/scss" scoped>
  .main-layout {
    display: flex;
    position: relative;
    flex-direction: column;
    background-color: #f2f7fa;
    flex: 0 1 auto;
    width: 100%;
    height: 100%;

    header {
      height: 60px;
      flex: 0 0 auto;
      display: flex;
      justify-content: space-between;
      width: 100%;
      background-color: #30b6cb;

      .title {
        padding: 0 20px;
        width: 164px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        font-size: 20px;

        .iconfont {
          font-size: 20px;
        }
      }

      .nav {
        display: flex;
        list-style: none;

        .link {
          height: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0 44px;
          cursor: pointer;
          color: #fff;
          overflow: hidden;
          text-decoration: none;

          &:hover, &.active {
            background-color: #2199ad;
          }
        }

        /deep/ .el-submenu__title i {
          color: #fff;
        }

        .el-submenu__icon-arrow {
          color: #fff;
        }
      }
    }

    .main-container {
      flex: auto;
      overflow: hidden;
      display: flex;
      background-color: #f2f7fa;
      padding: 24px;
    }
  }
</style>
