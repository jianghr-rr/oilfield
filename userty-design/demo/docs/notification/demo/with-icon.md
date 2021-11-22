<cn>
#### 带有图标的通知提醒框
通知提醒框左侧有图标，图标可以被自定义。
</cn>

<us>
#### Notification with icon
A notification box with a icon at the left side.
</us>

```vue
<template>
  <div>
    <o-button @click="() => openNotificationWithIcon('success')">
      成功
    </o-button>
    <o-button @click="() => openNotificationWithIcon('info')">
      提示
    </o-button>
    <o-button @click="() => openNotificationWithIcon('warning')">
      警告
    </o-button>
    <o-button @click="() => openNotification()">
      自定义图标
    </o-button>
  </div>
</template>
<script>
export default {
  methods: {
    openNotificationWithIcon(type) {
      this.$omnotification[type]({
        message: `标题名称`,
        description:
          '这是一段文字信息，可以给用户提供通知提醒。这是一段文字信息，可以给用户提供通知提醒。这是一段文字信息，可以给用户提供通知提醒。',
      });
    },
    openNotification() {
      this.$omnotification.open({
        message: `标题名称`,
        description:
          '这是一段文字信息，可以给用户提供通知提醒。这是一段文字信息，可以给用户提供通知提醒。这是一段文字信息，可以给用户提供通知提醒。',
        icon: <img src="/avatar-2.png" />,
      });
    },
  },
};
</script>
```
