<template>
  <div class="layout">
    <div class="layout-left" :style="{'--color': themmeColor}">
      <o-affix>
        <div class="menu-wrap">
          <a-menu
            mode="inline"
            :open-keys="openKeys"
            :default-selected-keys="defaultSelectedKeys"
            style="width: 256px"
            @openChange="onOpenChange"
          >
            <a-sub-menu key="/homepage/guide/">
              <span slot="title"><span>Userty Design</span></span>
              <a-menu-item key="/homepage/guide/introduce">
                <router-link to="/homepage/guide/introduce">介绍</router-link>
              </a-menu-item>
              <!-- <a-menu-item key="/homepage/guide/designpr">
                <router-link to="/homepage/guide/designpr">设计原则</router-link>
              </a-menu-item> -->
              <a-menu-item key="/homepage/guide/designspec">
                <router-link to="/homepage/guide/designspec">设计规范</router-link>
              </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="/homepage/designpr/">
              <span slot="title"><span>设计原则</span></span>
              <a-menu-item key="/homepage/designpr/base">
                <router-link to="/homepage/designpr/base">基础原则</router-link>
              </a-menu-item>
              <a-menu-item key="/homepage/designpr/graph">
                <router-link to="/homepage/designpr/graph">间距关系</router-link>
              </a-menu-item>
              <a-menu-item key="/homepage/designpr/alignment">
                <router-link to="/homepage/designpr/alignment">对齐方式</router-link>
              </a-menu-item>
              <a-menu-item key="/homepage/designpr/infotip">
                <router-link to="/homepage/designpr/infotip">信息提示</router-link>
              </a-menu-item>
              <a-menu-item key="/homepage/designpr/transition">
                <router-link to="/homepage/designpr/transition">过渡效果</router-link>
              </a-menu-item>
              <a-menu-item key="/homepage/designpr/simple">
                <router-link to="/homepage/designpr/simple">简单易用</router-link>
              </a-menu-item>
              <a-menu-item key="/homepage/designpr/user">
                <router-link to="/homepage/designpr/user">用户体验要素</router-link>
              </a-menu-item>
              <a-menu-item key="/homepage/designpr/sequence">
                <router-link to="/homepage/designpr/sequence">序列效应</router-link>
              </a-menu-item>
              <a-menu-item key="/homepage/designpr/test">
                <router-link to="/homepage/designpr/test">测试法则</router-link>
              </a-menu-item>
              <!-- <a-menu-item key="/homepage/guide/designpr">
                <router-link to="/homepage/guide/designpr">设计原则</router-link>
              </a-menu-item> -->
            </a-sub-menu>
            <a-menu-item key="/homepage/instructions/main">
              <router-link to="/homepage/instructions/main">使用说明</router-link>
            </a-menu-item>
            <a-menu-item key="/homepage/fag/main">
              <router-link to="/homepage/fag/main">常见问题</router-link>
            </a-menu-item>
            <a-menu-item key="/homepage/introduce/main">
              <router-link to="/homepage/introduce/main">发布内容</router-link>
            </a-menu-item>
          </a-menu>
        </div>
      </o-affix>
    </div>
    <div class="layout-right">
      <router-view v-mountedCallback="mountedCallback" />
    </div>
  </div>
</template>
<script>
import NProgress from 'nprogress';

export default {
  data() {
    return {
      rootSubmenuKeys: ['/homepage/guide', '/homepage/theme', '/homepage/resource'],
      openKeys: [],
      defaultSelectedKeys: [this.$route.fullPath],
      theme: this.$store.getters.theme,
      themmeColor: this.$store.getters.color
    };
  },
  computed: {
      getColor() {
        return this.$store.getters.color
      },
      getTheme() {
        return this.$store.getters.theme
      }
  },
  watch: {
      getColor(val) {
        this.themmeColor = val;
      },
      getTheme(val) {
        this.theme = val;
      },
  },
  methods: {
    mountedCallback() {
      NProgress.done();
      document.documentElement.scrollTop = 0;
    },
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
  },
  mounted() {
    const arr = this.$route.fullPath.split('/');
    let openKey = '';
    for (let i = 0; i < arr.length - 1; i++) {
      openKey += arr[i] + '/';
    }
    this.openKeys = [openKey];
      // console.log(this.primaryColor);
      // this.titleStyle = {
      //     color: this.primaryColor
      // }
  },
};
</script>
<style lang="less" scope>
  .layout {
    padding: 40px 0;
    display: flex;
  }
  .layout-left {
    box-shadow: 1px -2px 4px 0px #F2F2F2;

    .menu-wrap {
      max-height: 100vh;
      overflow: auto;
    }
    .ant-menu{
      background: none;
    }

    .ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left {
      border: none;
    }

    .ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title,
    .ant-menu-sub.ant-menu-inline > .ant-menu-item,
    .ant-menu-vertical > .ant-menu-item,
    .ant-menu-inline > .ant-menu-item {
      height: 60px;
      line-height: 60px;
      padding-left: 60px !important;
      margin: 0;
    }
    .ant-menu-sub.ant-menu-inline > .ant-menu-item {
      margin: 0;
      padding-left: 80px !important;
      & * {
        font-size: 14px;
      }
      & .chinese {
        font-size: 14px;
      }
    }
    .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow {
      right: 20px;
    }
    .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow::before,
    .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow::after {
      width: 6px;
    }
    .ant-menu:not(.ant-menu-horizontal) > .ant-menu-item-selected {
      background: none;
      // color: #990F0F;
      position: relative;
      &::before {
        content: ' ';
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        border-bottom: 2px solid var(--color);
      }
      &::after {
        display: none;
      }
    }
    .ant-menu:not(.ant-menu-horizontal) .ant-menu-sub .ant-menu-item-selected {
      background: none;
      position: relative;
      &::before {
        content: ' ';
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 80px;
        border-bottom: 2px solid var(--color);
      }
      &::after {
        display: none;
      }
    }
    // .ant-menu-item:hover,
    // .ant-menu-item-active,
    // .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
    // .ant-menu-submenu-active, .ant-menu-submenu-title:hover {
    //   color: #990F0F;
    // }
    .ant-menu-sub.ant-menu-inline {
      position: relative;
      padding: 2px 0;
      &::before {
        content: ' ';
        width: 100%;
        height: 3px;
        position: absolute;
        top: 0;
        left: 0;
        box-shadow: inset 0px 15px 10px -15px #F2F2F2;
      }
      &::after {
        content: ' ';
        width: 100%;
        height: 3px;
        position: absolute;
        bottom: 0;
        left: 0;
        box-shadow: inset 0px -5px 10px -3px #F2F2F2;
      }
      // box-shadow: 0px 0px -3px 0px #F2F2F2;
    }
  }
  .layout-right {
    flex: 1;
    margin: 0 200px 0 60px;
    padding: 8px 0 0 0;
  }
</style>
