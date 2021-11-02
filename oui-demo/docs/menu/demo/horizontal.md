<cn>
#### 顶部导航
水平的顶部导航菜单。
</cn>

<us>
#### Top Navigation
Horizontal top navigation menu.
</us>

```vue
<template>
  <div>
    <o-menu v-model="current" mode="horizontal">
      <o-menu-item key="mail"> <a-icon type="mail" />Navigation One </o-menu-item>
      <o-menu-item key="app" disabled> <a-icon type="appstore" />Navigation Two </o-menu-item>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
          ><a-icon type="setting" />Navigation Three - Submenu</span
        >
        <o-menu-item-group title="Item 1">
          <o-menu-item key="setting:1">
            Option 1
          </o-menu-item>
          <o-menu-item key="setting:2">
            Option 2
          </o-menu-item>
        </o-menu-item-group>
        <o-menu-item-group title="Item 2">
          <o-menu-item key="setting:3">
            Option 3
          </o-menu-item>
          <o-menu-item key="setting:4">
            Option 4
          </o-menu-item>
        </o-menu-item-group>
      </a-sub-menu>
      <o-menu-item key="alipay">
        <a href="https://antdv.com" target="_blank" rel="noopener noreferrer"
          >Navigation Four - Link</a
        >
      </o-menu-item>
    </o-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: ['mail'],
    };
  },
};
</script>
```
