<cn>
#### 普通提示
信息提醒反馈，所有按钮两边距文字均为 20px 。
</cn>

<us>
#### Normal prompt
Normal message for information.
</us>

```vue
<template>
  <o-button type="primary" @click="info">
    打开信息提醒
  </o-button>
</template>
<script>
export default {
  methods: {
    info() {
      this.$ommessage.info('这是一条信息提醒');
    },
  },
};
</script>
```
