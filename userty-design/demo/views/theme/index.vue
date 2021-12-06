<template>
  <div class="layout-theme">
    <div class="layout-left-theme" :style="{'--color': themmeColor}">
      <div class="menu-wrap">
        <a-menu
          mode="inline"
          :open-keys="openKeys"
          :default-selected-keys="defaultSelectedKeys"
          style="width: 256px"
          @openChange="onOpenChange"
        >
          <a-sub-menu key="/homepage/theme">
            <a-menu-item key="/homepage/theme/main">
              <router-link to="/homepage/theme/main">定制主题</router-link>
            </a-menu-item>
            <a-menu-item key="/homepage/theme/use">
              <router-link to="/homepage/theme/use">主题使用</router-link>
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </div>
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
      rootSubmenuKeys: ['/homepage/theme'],
      openKeys: ['/homepage/theme'],
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
    // const arr = this.$route.fullPath.split('/');
    // let openKey = '';
    // for (let i = 0; i < arr.length - 1; i++) {
    //   openKey += arr[i] + '/';
    // }
    // this.openKeys = [openKey];
      // console.log(this.primaryColor);
      // this.titleStyle = {
      //     color: this.primaryColor
      // }
  },
};
</script>
<style lang="less" scope>
  .layout-theme {
    padding: 40px 0 120px 0;
    display: flex;

    .ant-menu-submenu-title {
      display: none;
    }
  }
  .layout-left-theme {
    box-shadow: 1px -2px 4px 0px #F2F2F2;

    background: #FFFFFF;
    .menu-wrap {
      max-height: 100vh;
      overflow-y: auto;
      overflow-x: hidden;
      width: 257px;
      &::-webkit-scrollbar{
            width: 4px;
            height: 4px;
        }
      /*定义滚动条轨道 内阴影+圆角*/
      &::-webkit-scrollbar-track{
          border-radius: 6px;
          background-color: #cecfd1f6;
      }

      /*定义滑块 内阴影+圆角*/
      &::-webkit-scrollbar-thumb{
          border-radius: 6px;
          box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.561);
      }
    }
    .ant-menu{
      background: #FFFFFF;
    }

    .ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left {
      border: none;
    }

    .ant-menu-submenu-inline {
      background: #FFFFFF;
    }

    .ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title,
    .ant-menu-sub.ant-menu-inline > .ant-menu-item,
    .ant-menu-vertical > .ant-menu-item,
    .ant-menu-inline > .ant-menu-item {
      height: 60px;
      line-height: 60px;
      box-sizing: border-box;
    }
    .ant-menu-sub.ant-menu-inline > .ant-menu-item {
      margin: 0;
      padding-left:60px !important;
    }
    .ant-menu-submenu-selected {
      // color: #990F0F;
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
        left: 60px;
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
        left: 60px;
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
    width: auto;
    min-width: 800px;
    flex-shrink: 0;
  }
</style>
