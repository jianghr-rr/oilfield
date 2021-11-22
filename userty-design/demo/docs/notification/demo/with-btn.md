<cn>
#### 自定义按钮
自定义关闭按钮的样式和文字。
</cn>

<us>
#### Custom close button
To customize the style or font of the close button.
</us>

```vue
<template>
  <o-button type="primary" @click="openNotification">
    Open the notification box
  </o-button>
</template>
<script>
const close = () => {
  console.log(
    'Notification was closed. Either the close button was clicked or duration time elapsed.',
  );
};
export default {
  methods: {
    openNotification() {
      const key = `open${Date.now()}`;
      this.$omnotification.open({
        message: 'Notification Title',
        description:
          'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
        btn: h => {
          return h(
            'o-button',
            {
              props: {
                type: 'primary',
                size: 'small',
              },
              on: {
                click: () => this.$omnotification.close(key),
              },
            },
            'Confirm',
          );
        },
        key,
        onClose: close,
      });
    },
  },
};
</script>
```
