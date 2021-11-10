<cn>
#### 主题
内建了两套主题 `light|dark`，默认 `light`。
</cn>

<us>
#### Menu Themes
There are two built-in themes: 'light' and 'dark'. The default value is 'light'.
</us>

```vue
<template>
  <div>
    <o-switch
      default-checked
      checked-children="dark"
      un-checked-children="light"
      @change="changeTheme"
    />
    <br />
    <br />
    <o-menu
      style="width: 256px"
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      mode="inline"
      :theme="theme"
      :selected-keys="[current]"
      @click="handleClick"
    >
      <o-menu-item key="1">
        <a-icon type="mail" />
        Navigation One
      </o-menu-item>
      <o-menu-item key="2">
        <a-icon type="calendar" />
        Navigation Two
      </o-menu-item>
      <o-sub-menu key="sub1">
        <span slot="title"><a-icon type="appstore" /><span>Navigation Three</span></span>
        <o-menu-item key="3">
          Option 3
        </o-menu-item>
        <o-menu-item key="4">
          Option 4
        </o-menu-item>
        <o-sub-menu key="sub1-2" title="Submenu">
          <o-menu-item key="5">
            Option 5
          </o-menu-item>
          <o-menu-item key="6">
            Option 6
          </o-menu-item>
        </o-sub-menu>
      </o-sub-menu>
      <o-sub-menu key="sub2">
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
      </o-sub-menu>
    </o-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: '1',
      theme: 'dark',
    };
  },
  methods: {
    handleClick(e) {
      console.log('click ', e);
      this.current = e.key;
    },
    changeTheme(checked) {
      this.theme = checked ? 'dark' : 'light';
    },
  },
};
</script>
```
