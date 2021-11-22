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
    <o-button @click="openNotification('topLeft')">
      左上角
    </o-button>
    <o-button @click="openNotification('bottomLeft')">
      左下角
    </o-button>
    <o-button @click="openNotification('topRight')">
      右上角
    </o-button>
    <o-button @click="openNotification('bottomRight')">
      右下角
    </o-button>
  </div>
</template>
<script>
export default {
  methods: {
    openNotification(placement) {
      this.$omnotification.open({
        message: `标题名称`,
        description:
          '这是一段文字信息，可以给用户提供通知提醒。这是一段文字信息，可以给用户提供通知提醒。这是一段文字信息，可以给用户提供通知提醒。',
        placement,
      });
    },
  },
};
</script>
```
