<cn>
#### 带有图标的通知提醒框
通知提醒框左侧有图标。
</cn>

<us>
#### Notification with icon
A notification box with a icon at the left side.
</us>

```vue
<template>
  <div>
    <o-button @click="() => openNotificationWithIcon('success')">
      Success
    </o-button>
    <o-button @click="() => openNotificationWithIcon('info')">
      Info
    </o-button>
    <o-button @click="() => openNotificationWithIcon('warning')">
      Warning
    </o-button>
    <o-button @click="() => openNotificationWithIcon('error')">
      Error
    </o-button>
  </div>
</template>
<script>
export default {
  methods: {
    openNotificationWithIcon(type) {
      this.$omnotification[type]({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      });
    },
  },
};
</script>
```
