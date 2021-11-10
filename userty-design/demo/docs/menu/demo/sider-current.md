<cn>
#### 只展开当前父级菜单
点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。
</cn>

<us>
#### Open current submenu only
Click the menu and you will see that all the other menus gets collapsed to keep the entire menu compact.
</us>

```vue
<template>
  <div>
    <o-menu mode="inline" :open-keys="openKeys" style="width: 256px" @openChange="onOpenChange">
      <o-sub-menu key="sub1">
        <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
        <o-menu-item key="1">
          Option 1
        </o-menu-item>
        <o-menu-item key="2">
          Option 2
        </o-menu-item>
        <o-menu-item key="3">
          Option 3
        </o-menu-item>
        <o-menu-item key="4">
          Option 4
        </o-menu-item>
      </o-sub-menu>
      <o-sub-menu key="sub2">
        <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
        <o-menu-item key="5">
          Option 5
        </o-menu-item>
        <o-menu-item key="6">
          Option 6
        </o-menu-item>
        <o-sub-menu key="sub3" title="Submenu">
          <o-menu-item key="7">
            Option 7
          </o-menu-item>
          <o-menu-item key="8">
            Option 8
          </o-menu-item>
        </o-sub-menu>
      </o-sub-menu>
      <o-sub-menu key="sub4">
        <span slot="title"><a-icon type="setting" /><span>Navigation Three</span></span>
        <o-menu-item key="9">
          Option 9
        </o-menu-item>
        <o-menu-item key="10">
          Option 10
        </o-menu-item>
        <o-menu-item key="11">
          Option 11
        </o-menu-item>
        <o-menu-item key="12">
          Option 12
        </o-menu-item>
      </o-sub-menu>
    </o-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
      openKeys: ['sub1'],
    };
  },
  methods: {
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
  },
};
</script>
```
