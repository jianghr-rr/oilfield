<cn>
#### 卡片加载中
可以直接把内容内嵌到 `Spin` 中，将现有容器变为加载状态。
</cn>

<us>
#### Embedded mode
Embedding content into `Spin` will alter it into loading state.
</us>

```vue
<style scoped>
.spin-content {
  border: 1px solid #91d5ff;
  background-color: #e6f7ff;
  padding: 30px;
}
</style>
<template>
  <div>
    <o-spin :spinning="spinning">
      <div class="spin-content">
        可以点击‘切换’按钮，控制本区域的spin展示。
      </div>
    </o-spin>
    Loading state：<o-switch v-model="spinning" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      spinning: false,
    };
  },
  methods: {
    changeSpinning() {
      this.spinning = !this.spinning;
    },
  },
};
</script>
```
