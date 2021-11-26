<cn>
#### 缩起内嵌菜单
内嵌菜单可以被缩起或展开。
</cn>

<us>
#### Inline menu
Vertical menu with inline submenus.
</us>

```vue
<template>
  <div style="width: 256px">
    <o-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
        <o-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </o-button>
    <o-menu
      :default-selected-keys="['1']"
      :open-keys.sync="openKeys"
      mode="inline"
      @click="handleClick"
      :inline-collapsed="collapsed"
    >
      <o-sub-menu key="sub1" @titleClick="titleClick">
        <span slot="title"><o-icon type="mail" /><span>分组 1</span></span>
        <o-menu-item-group key="g1">
          <o-menu-item key="1">
            选择 1
          </o-menu-item>
          <o-menu-item key="2">
            选择 2
          </o-menu-item>
          <o-menu-item key="3">
            选择 3
          </o-menu-item>
          <o-menu-item key="4">
            选择 4
          </o-menu-item>
        </o-menu-item-group>
      </o-sub-menu>
      <o-sub-menu key="sub2" @titleClick="titleClick">
        <span slot="title"><o-icon type="appstore" /><span>分组 2</span></span>
        <o-menu-item key="5">
          选择 5
        </o-menu-item>
        <o-menu-item key="6">
          选择 6
        </o-menu-item>
        <o-sub-menu key="sub3" title="Submenu">
          <o-menu-item key="7">
            选择 7
          </o-menu-item>
          <o-menu-item key="8">
            选择 8
          </o-menu-item>
        </o-sub-menu>
      </o-sub-menu>
      <o-sub-menu key="sub4">
        <span slot="title"><o-icon type="setting" /><span>分组 3</span></span>
        <o-menu-item key="9">
          选择 9
        </o-menu-item>
        <o-menu-item key="10">
          选择 10
        </o-menu-item>
        <o-menu-item key="11">
          选择 11
        </o-menu-item>
        <o-menu-item key="12">
          选择 12
        </o-menu-item>
      </o-sub-menu>
    </o-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: ['mail'],
      openKeys: ['sub1'],
      collapsed: false,
    };
  },
  watch: {
    openKeys(val) {
      console.log('openKeys', val);
    },
  },
  methods: {
    handleClick(e) {
      console.log('click', e);
    },
    titleClick(e) {
      console.log('titleClick', e);
    },
     toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>
```
