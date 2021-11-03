<cn>
#### 普通提示
信息提醒反馈。
</cn>

<us>
#### Normal prompt
Normal message for information.
</us>

```vue
<template>
  <o-button type="primary" @click="info">
    Display normal message
  </o-button>
</template>
<script>
export default {
  methods: {
    info() {
      this.$ommessage.info('This is a normal message');
    },
  },
};
</script>
```
