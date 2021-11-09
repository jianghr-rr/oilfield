<cn>
#### 加载状态
添加 `loading` 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。
</cn>

<us>
#### Loading
A loading indicator can be added to a button by setting the `loading` property on the `Button`.
</us>

```vue
<template>
  <div>
    <o-button type="primary" loading />
    <o-button type="primary" loading>
      Loading
    </o-button>
    <o-button type="primary" loading :style="{borderRadius: '18px'}">
      Loading
    </o-button>
    <br/>
    <o-button loading />
    <o-button loading>
      Loading
    </o-button>
    <o-button loading :style="{borderRadius: '18px'}">
      Loading
    </o-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      iconLoading: false,
    };
  },
  methods: {
    enterLoading() {
      this.loading = true;
    },
    enterIconLoading() {
      this.iconLoading = { delay: 1000 };
    },
  },
};
</script>
```
