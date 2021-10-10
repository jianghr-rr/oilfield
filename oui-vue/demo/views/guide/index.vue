<template>
  <div class="layout">
    <div class="layout-left" :style="{'--color': themmeColor}">
      <a-menu mode="inline" :open-keys="openKeys" style="width: 256px" @openChange="onOpenChange">
        <a-sub-menu key="sub1">
          <span slot="title"><span>Userty Design</span></span>
          <a-menu-item key="1">
            <router-link to="/homepage/guide/introduce">介绍</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/homepage/guide/designpr">设计原则</router-link>
          </a-menu-item>
          <a-menu-item key="3">
            设计规范
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="sub2">
          <span>使用说明</span>
        </a-menu-item>
        <a-menu-item key="sub4">
          <span>常见问题</span>
        </a-menu-item>
        <a-menu-item key="sub5">
          <span>发布内容</span>
        </a-menu-item>
      </a-menu>
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
      rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
      openKeys: ['sub1'],
      themmeColor: this.$store.getters.color
    };
  },
  computed: {
      getColor() {
          return this.$store.getters.color
      }
  },
  watch: {
      getColor(val) {
          this.themmeColor = val;
      }
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
  }
};
</script>
<style lang="less" scope>
  .layout {
    padding: 40px 0;
    display: flex;
  }
  .layout-left {
    box-shadow: 1px -2px 4px 0px #F2F2F2;

    .ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left {
      border: none;
    }

    .ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title,
    .ant-menu-sub.ant-menu-inline > .ant-menu-item,
    .ant-menu-vertical > .ant-menu-item,
    .ant-menu-inline > .ant-menu-item {
      height: 60px;
      line-height: 60px;
    }
    .ant-menu-sub.ant-menu-inline > .ant-menu-item {
      margin: 0;
      padding-left: 80px !important;
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
  }
</style>