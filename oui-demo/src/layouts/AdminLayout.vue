<template>
  <div class="admin-layout-wrapper">
    <admin-header
      :class="[{ 'fixed-tabs': fixedTabs, 'fixed-header': fixedHeader, 'multi-page': multiPage }]"
      :style="headerStyle"
      :menuData="headMenuData"
      :collapsed="collapsed"
      @toggleCollapse="toggleCollapse"
    />
    <drawer v-if="isMobile" v-model="drawerOpen">
      <side-menu
        :theme="theme.mode"
        :menuData="menuData"
        :collapsed="false"
        :collapsible="false"
        @menuSelect="onMenuSelect"
      />
    </drawer>
    <side-menu
      :class="[fixedSideBar ? 'fixed-side' : '']"
      :theme="theme.mode"
      v-else-if="layout === 'side' || layout === 'mix'"
      :menuData="sideMenuData"
      :collapsed="collapsed"
      :collapsible="true"
    />
    <o-layout :class="['admin-layout', 'beauty-scroll']">
      <drawer v-if="!hideSetting" v-model="showSetting" placement="right">
        <div class="setting" slot="handler">
          <o-icon :type="showSetting ? 'close' : 'setting'" />
        </div>
        <setting />
      </drawer>
      <o-layout id="layoutContainer" class="admin-layout-main beauty-scroll">
        <o-layout-content class="admin-layout-content" :style="`min-height: ${minHeight}px;`">
          <div style="position: relative">
            <slot></slot>
          </div>
        </o-layout-content>
      </o-layout>
    </o-layout>
    <page-footer :link-list="footerLinks" :copyright="copyright" />
  </div>
</template>

<script>
import AdminHeader from './header/AdminHeader'
import PageFooter from './footer/PageFooter'
import Drawer from '../components/tool/Drawer'
import Setting from '../components/setting/Setting'
import SideMenu from '../components/menu/SideMenu'
import { mapState, mapMutations, mapGetters } from 'vuex'

// const minHeight = window.innerHeight - 64 - 122

export default {
  name: 'AdminLayout',
  components: { Setting, SideMenu, Drawer, PageFooter, AdminHeader },
  data() {
    return {
      minHeight: window.innerHeight - 64 - 122,
      collapsed: false,
      showSetting: false,
      drawerOpen: false
    }
  },
  provide() {
    return {
      adminLayout: this
    }
  },
  watch: {
    $route(val) {
      this.setActivated(val)
    },
    layout() {
      this.setActivated(this.$route)
    },
    isMobile(val) {
      if (!val) {
        this.drawerOpen = false
      }
    }
  },
  computed: {
    ...mapState('setting', ['isMobile', 'theme', 'layout', 'footerLinks', 'copyright', 'fixedHeader', 'fixedSideBar',
      'fixedTabs', 'hideSetting', 'multiPage']),
    ...mapGetters('setting', ['firstMenu', 'subMenu', 'menuData']),
    sideMenuWidth() {
      return this.collapsed ? '80px' : '256px'
    },
    headerStyle() {
      let width = (this.fixedHeader && this.layout !== 'head' && !this.isMobile) ? `calc(100% - ${this.sideMenuWidth})` : '100%'
      let position = this.fixedHeader ? 'fixed' : 'static'
      return `width: ${width}; position: ${position};`
    },
    headMenuData() {
      const { layout, menuData, firstMenu } = this
      return layout === 'mix' ? firstMenu : menuData
    },
    sideMenuData() {
      const { layout, menuData, subMenu } = this
      return layout === 'mix' ? subMenu : menuData
    }
  },
  methods: {
    ...mapMutations('setting', ['correctPageMinHeight', 'setActivatedFirst']),
    toggleCollapse() {
      this.collapsed = !this.collapsed
    },
    onMenuSelect() {
      this.toggleCollapse()
    },
    setActivated(route) {
      if (this.layout === 'mix') {
        let matched = route.matched
        matched = matched.slice(0, matched.length - 1)
        const { firstMenu } = this
        for (let menu of firstMenu) {
          if (matched.findIndex(item => item.path === menu.fullPath) !== -1) {
            this.setActivatedFirst(menu.fullPath)
            break
          }
        }
      }
    }
  },
  created() {
    this.correctPageMinHeight(this.minHeight - 24)
    this.setActivated(this.$route)
  },
  beforeDestroy() {
    this.correctPageMinHeight(-this.minHeight + 24)
  }
}
</script>

<style lang="less" scoped>
.admin-layout-wrapper{
  // height: calc(100vh + 120px);
}
.fixed-side {
  position: sticky;
  top: 0px;
  bottom: 0;
  float: left;
  margin-top: 40px;
}
.admin-layout {
  margin-top: 40px;
  .virtual-side {
    transition: all 0.2s;
  }
  .virtual-header {
    transition: all 0.2s;
    opacity: 0;
    &.fixed-tabs.multi-page:not(.fixed-header) {
      height: 0;
    }
  }
  .admin-layout-main {
    background: #FFF;
    .admin-header {
      top: 0;
      right: 0;
      overflow: hidden;
      transition: all 0.2s;
      &.fixed-tabs.multi-page:not(.fixed-header) {
        height: 0;
      }
    }
  }
  .admin-layout-content {
    padding: 24px 64px 160px 64px;
    box-shadow: inset 2px -2px 8px @shadow-shallow-color;
  }
  .setting {
    background-color: @primary-color;
    color: @base-bg-color;
    border-radius: 5px 0 0 5px;
    line-height: 40px;
    font-size: 22px;
    width: 40px;
    height: 40px;
    box-shadow: -2px 0 8px @shadow-color;
  }
}
</style>
