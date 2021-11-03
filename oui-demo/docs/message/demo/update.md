<cn>
#### 更新消息内容
可以通过唯一的 `key` 来更新内容。
</cn>

<us>
#### Update Message Content
Update message content with unique `key`.
</us>

```vue
<template>
  <a-button type="primary" @click="openMessage">
    Open the message box
  </a-button>
</template>
<script>
const key = 'updatable';
export default {
  methods: {
    openMessage() {
      this.$ommessage.loading({ content: 'Loading...', key });
      setTimeout(() => {
        this.$ommessage.success({ content: 'Loaded!', key, duration: 2 });
      }, 1000);
    },
  },
};
</script>
```
