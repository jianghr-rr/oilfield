<cn>
#### Promise 接口
可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 message 将要结束时通过 then 显示新的 message 。
</cn>

<us>
#### Promise interface
`message` provides promise interface for `onClose`. The above example will display a new message when old message is about to finish.
</us>

```vue
<template>
  <a-button @click="success">
    显示消息提醒序列
  </a-button>
</template>
<script>
export default {
  methods: {
    success() {
      this.$ommessage
        .loading('正在进行中...', 2.5)
        .then(() => this.$ommessage.success('加载已完成！', 2.5))
        .then(() => this.$ommessage.info('加载已结束！', 2.5));
    },
  },
};
</script>
```
