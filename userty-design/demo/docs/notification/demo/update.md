<cn>
#### 更新消息内容
可以通过唯一的 key 来更新内容。
</cn>

<us>
#### Update Message Content
Update content with unique key.
</us>

```vue
<template>
  <o-button type="primary" @click="openNotification">
    打开通知提醒
  </o-button>
</template>
<script>
const key = 'updatable';
export default {
  methods: {
    openNotification() {
      this.$omnotification.open({
        key,
        message: `标题名称`,
        description:
          '这是一段文字信息，可以给用户提供通知提醒。这是一段文字信息，可以给用户提供通知提醒。这是一段文字信息，可以给用户提供通知提醒。',
      });
      setTimeout(() => {
        this.$omnotification.open({
          key,
          message: `标题名称`,
          description:
            '这是一段文字信息，可以给用户提供通知提醒。这是一段文字信息，可以给用户提供通知提醒。这是一段文字信息，可以给用户提供通知提醒。',
        });
      }, 1000);
    },
  },
};
</script>
```
