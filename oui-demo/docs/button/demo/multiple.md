<cn>
#### 多个按钮组合
按钮组合使用时，推荐使用1个主操作 + n 个次操作，3个以上操作时把更多操作放到 `Dropdown.Button` 中组合使用。
</cn>

<us>
#### Multiple Buttons
If you need several buttons, we recommend that you use 1 primary button + n secondary buttons, and if there are more than three operations, you can group some of them into `Dropdown.Button`.
</us>

```vue
<template>
  <div>
    <o-button type="primary">
      Primary
    </o-button>
    <o-button>secondary</o-button>
    <o-dropdown>
      <o-menu slot="overlay" @click="handleMenuClick">
        <o-menu-item key="1">
          1st item
        </o-menu-item>
        <o-menu-item key="2">
          2nd item
        </o-menu-item>
        <o-menu-item key="3">
          3rd item
        </o-menu-item>
      </o-menu>
      <o-button> Actions <o-icon type="down" /> </o-button>
    </o-dropdown>
  </div>
</template>
<script>
export default {
  methods: {
    handleMenuClick(e) {
      console.log('click', e);
    },
  },
};
</script>
```
