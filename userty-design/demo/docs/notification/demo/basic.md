<cn>
#### 基本
最简单的用法，4.5 秒后自动关闭。
</cn>

<us>
#### Basic
The simplest usage that close the notification box after 4.5s.
</us>

```vue
<template>
  <o-button type="primary" @click="openNotification">
    打开通知提醒
  </o-button>
</template>
<script>
export default {
  methods: {
    openNotification() {
      this.$omnotification.open({
        message: `标题名称`,
        description:
          '这是一段文字信息，可以给用户提供通知提醒。这是一段文字信息，可以给用户提供通知提醒。这是一段文字信息，可以给用户提供通知提醒。',
        onClick: () => {
          console.log('点击!');
        },
      });
    },
  },
};
</script>
```
