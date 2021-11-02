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
    <a-dropdown>
      <a-menu slot="overlay" @click="handleMenuClick">
        <a-menu-item key="1">
          1st item
        </a-menu-item>
        <a-menu-item key="2">
          2nd item
        </a-menu-item>
        <a-menu-item key="3">
          3rd item
        </a-menu-item>
      </a-menu>
      <o-button> Actions <a-icon type="down" /> </o-button>
    </a-dropdown>
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
