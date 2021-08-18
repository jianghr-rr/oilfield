<cn>
  #### 预加载的卡片
  数据读入前会有文本块样式
</cn>

<us>
  #### Loading card
  Shows a loading indirector while the contents of the card is being featched
</us>

```vue
<template>
  <div>
    <o-card :loading="loading" title="Card title">
      whatever content
    </o-card>
    <o-button style="marginTop: 16px" @click="handleClick">
      Toggle loading
    </o-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    handleClick() {
      this.loading = !this.loading;
    },
  },
};
</script>
```
