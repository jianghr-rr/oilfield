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
    <o-button @click="success">
      Success
    </o-button>
    <o-button @click="error">
      Error
    </o-button>
    <o-button @click="warning">
      Warning
    </o-button>
  </div>
</template>
<script>
export default {
  methods: {
    success() {
      this.$ommessage.success('This is a success message');
    },
    error() {
      this.$ommessage.error('This is an error message');
    },
    warning() {
      this.$ommessage.warning('This is a warning message');
    },
  },
};
</script>
```
