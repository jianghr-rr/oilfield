<cn>
#### 加载中
进行全局 loading，异步自行移除。
</cn>

<us>
#### Message with loading indicator
Display a global loading indicator, which is dismissed by itself asynchronously.
</us>

```vue
<template>
  <o-button @click="success">
    Display a loading indicator
  </o-button>
</template>
<script>
export default {
  methods: {
    success() {
      const hide = this.$ommessage.loading('Action in progress..', 0);
      setTimeout(hide, 2500);
    },
  },
};
</script>
```
