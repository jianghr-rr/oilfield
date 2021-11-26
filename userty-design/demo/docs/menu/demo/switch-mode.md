<cn>
#### 切换菜单类型
展示动态切换模式。
</cn>

<us>
#### Switch the menu type
Show the dynamic switching mode (between 'inline' and 'vertical').
</us>

```vue
<template>
  <div>
    <o-switch :default-checked="false" @change="changeMode" /> 更改模式
    <span className="ant-divider" style="margin: 0 1em" />
    <o-switch :default-checked="false" @change="changeTheme" /> 更改主题
    <br />
    <br />
    <o-menu
      style="width: 256px"
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      :mode="mode"
      :theme="theme"
    >
      <o-menu-item key="1">
        <a-icon type="mail" />
        分组 1
      </o-menu-item>
      <o-menu-item key="2">
        <a-icon type="calendar" />
        分组 2
      </o-menu-item>
      <o-sub-menu key="sub1">
        <span slot="title"><a-icon type="appstore" /><span>分组 3</span></span>
        <o-menu-item key="3">
          选择 3
        </o-menu-item>
        <o-menu-item key="4">
          选择 4
        </o-menu-item>
      </o-sub-menu>
      <o-sub-menu key="sub2">
        <span slot="title"><a-icon type="setting" /><span>分组 4</span></span>
        <o-menu-item key="7">
          选择 7
        </o-menu-item>
        <o-menu-item key="8">
          选择 8
        </o-menu-item>
        <o-menu-item key="9">
          选择 9
        </o-menu-item>
        <o-menu-item key="10">
          选择 10
        </o-menu-item>
      </o-sub-menu>
    </o-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mode: 'inline',
      theme: 'light',
    };
  },
  methods: {
    changeMode(checked) {
      this.mode = checked ? 'vertical' : 'inline';
    },
    changeTheme(checked) {
      this.theme = checked ? 'dark' : 'light';
    },
  },
};
</script>
```
