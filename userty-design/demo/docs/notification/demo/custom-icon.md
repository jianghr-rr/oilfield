<cn>
#### 自定义图标
图标可以被自定义。
</cn>

<us>
#### Customized Icon
The icon can be customized to any vue node or (h) => vue node.
</us>

```vue
<template>
  <o-button type="primary" @click="openNotification">
    Open the notification box
  </o-button>
</template>
<script>
export default {
  methods: {
    openNotification() {
      this.$omnotification.open({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        icon: <o-icon type="smile" style="color: #108ee9" />,
      });
    },
  },
};
</script>
```
