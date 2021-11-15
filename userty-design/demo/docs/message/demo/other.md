<cn>
#### 其他提示类型
包括成功、失败、警告。
</cn>

<us>
#### Other types of message
Messages of success, error and warning types.
</us>

```vue
<template>
  <div>
    <o-button type="primary" @click="success">
      成功信息提醒
    </o-button>
    <o-button type="primary" @click="warning">
      警告信息提醒
    </o-button>
    <o-button type="primary" @click="error">
      错误信息提醒
    </o-button>
  </div>
</template>
<script>
export default {
  methods: {
    success() {
      this.$ommessage.success('这是一条成功信息');
    },
    error() {
      this.$ommessage.error('这是一条错误信息');
    },
    warning() {
      this.$ommessage.warning('这是一条警告信息');
    },
  },
};
</script>
```
