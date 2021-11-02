<cn>
#### 垂直菜单
子菜单是弹出的形式。
</cn>

<us>
#### Vertical menu
Submenus open as pop-ups.
</us>

```vue
<template>
  <div>
    <o-menu style="width: 256px" mode="vertical" @click="handleClick">
      <o-menu-item key="1">
        <a-icon type="mail" />
        Navigation One
      </o-menu-item>
      <o-menu-item key="2">
        <a-icon type="calendar" />
        Navigation Two
      </o-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="appstore" /><span>Navigation Three</span></span>
        <o-menu-item key="3">
          Option 3
        </o-menu-item>
        <o-menu-item key="4">
          Option 4
        </o-menu-item>
        <a-sub-menu key="sub1-2" title="Submenu">
          <o-menu-item key="5">
            Option 5
          </o-menu-item>
          <o-menu-item key="6">
            Option 6
          </o-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="setting" /><span>Navigation Four</span></span>
        <o-menu-item key="7">
          Option 7
        </o-menu-item>
        <o-menu-item key="8">
          Option 8
        </o-menu-item>
        <o-menu-item key="9">
          Option 9
        </o-menu-item>
        <o-menu-item key="10">
          Option 10
        </o-menu-item>
      </a-sub-menu>
    </o-menu>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick(e) {
      console.log('click ', e);
    },
  },
};
</script>
```
