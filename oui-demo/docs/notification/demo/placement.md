<cn>
#### 位置
可以设置通知从右上角、右下角、左下角、左上角弹出。
</cn>

<us>
#### Placement
A notification box can pop up from `topRight` or `bottomRight` or `bottomLeft` or `topLeft`.
</us>

```vue
<template>
  <div>
    <o-button type="primary" @click="openNotification('topLeft')">
      <o-icon type="radius-upleft" />
      topLeft
    </o-button>
    <o-button type="primary" @click="openNotification('topRight')">
      <o-icon type="radius-upright" />
      topRight
    </o-button>
    <o-divider />
    <o-button type="primary" @click="openNotification('bottomLeft')">
      <o-icon type="radius-bottomleft" />
      bottomLeft
    </o-button>
    <o-button type="primary" @click="openNotification('bottomRight')">
      <o-icon type="radius-bottomright" />
      bottomRight
    </o-button>
  </div>
</template>
<script>
export default {
  methods: {
    openNotification(placement) {
      this.$omnotification.open({
        message: `Notification ${placement}`,
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        placement,
      });
    },
  },
};
</script>
```
