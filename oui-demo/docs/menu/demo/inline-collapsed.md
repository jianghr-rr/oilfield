<cn>
#### 缩起内嵌菜单
内嵌菜单可以被缩起/展开。
</cn>

<us>
#### Collapsed inline menu
Inline menu could be collapsed.
</us>

```vue
<template>
  <div style="width: 256px">
    <o-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
      <o-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </o-button>
    <o-menu
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <o-menu-item key="1">
        <o-icon type="pie-chart" />
        <span>Option 1</span>
      </o-menu-item>
      <o-menu-item key="2">
        <o-icon type="desktop" />
        <span>Option 2</span>
      </o-menu-item>
      <o-menu-item key="3">
        <o-icon type="inbox" />
        <span>Option 3</span>
      </o-menu-item>
      <o-sub-menu key="sub1">
        <span slot="title"><o-icon type="mail" /><span>Navigation One</span></span>
        <o-menu-item key="5">
          Option 5
        </o-menu-item>
        <o-menu-item key="6">
          Option 6
        </o-menu-item>
        <o-menu-item key="7">
          Option 7
        </o-menu-item>
        <o-menu-item key="8">
          Option 8
        </o-menu-item>
      </o-sub-menu>
      <o-sub-menu key="sub2">
        <span slot="title"><o-icon type="appstore" /><span>Navigation Two</span></span>
        <o-menu-item key="9">
          Option 9
        </o-menu-item>
        <o-menu-item key="10">
          Option 10
        </o-menu-item>
        <o-sub-menu key="sub3" title="Submenu">
          <o-menu-item key="11">
            Option 11
          </o-menu-item>
          <o-menu-item key="12">
            Option 12
          </o-menu-item>
        </o-sub-menu>
      </o-sub-menu>
    </o-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>
```
