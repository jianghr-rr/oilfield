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
  <div class="menu-horiz-wrap">
    <o-menu v-model="current" mode="horizontal">
      <o-menu-item key="mail">导航一</o-menu-item>
      <o-menu-item key="app">导航二</o-menu-item>
      <o-sub-menu>
        <span slot="title" class="submenu-title-wrapper">
          导航三 - 子菜单
        </span>
        <o-menu-item-group title="分组 1">
          <o-menu-item key="setting:1">
            选项 1 自定义名称
          </o-menu-item>
          <o-menu-item key="setting:2">
            选项 1 自定义名称
          </o-menu-item>
        </o-menu-item-group>
        <o-menu-item-group title="分组 1">
          <o-menu-item key="setting:3">
            选项 1 自定义名称
          </o-menu-item>
          <o-menu-item key="setting:4">
            选项 1 自定义名称
          </o-menu-item>
        </o-menu-item-group>
      </o-sub-menu>
      <o-menu-item key="alipay">
        <a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer"
          >导航四 - 链接</a
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
<style>
  .menu-horiz-wrap {
    padding: 20px;
    box-shadow: 0px 0px 9px 1px rgba(215, 215, 215, 0.35);
  }
</style>
```
