<cn>
#### 内嵌菜单
垂直菜单，子菜单内嵌在菜单区域。
</cn>

<us>
#### Inline menu
Vertical menu with inline submenus.
</us>

```vue
<template>
  <div>
    <o-menu
      style="width: 256px"
      :default-selected-keys="['1']"
      :open-keys.sync="openKeys"
      mode="inline"
      @click="handleClick"
    >
      <o-sub-menu key="sub1" @titleClick="titleClick">
        <span slot="title"><o-icon type="mail" /><span>Navigation One</span></span>
        <o-menu-item-group key="g1">
          <template slot="title"> <o-icon type="qq" /><span>Item 1</span> </template>
          <o-menu-item key="1">
            Option 1
          </o-menu-item>
          <o-menu-item key="2">
            Option 2
          </o-menu-item>
        </o-menu-item-group>
        <o-menu-item-group key="g2" title="Item 2">
          <o-menu-item key="3">
            Option 3
          </o-menu-item>
          <o-menu-item key="4">
            Option 4
          </o-menu-item>
        </o-menu-item-group>
      </o-sub-menu>
      <o-sub-menu key="sub2" @titleClick="titleClick">
        <span slot="title"><o-icon type="appstore" /><span>Navigation Two</span></span>
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
        <span slot="title"><o-icon type="setting" /><span>Navigation Three</span></span>
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
      current: ['mail'],
      openKeys: ['sub1'],
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
  },
};
</script>
```
