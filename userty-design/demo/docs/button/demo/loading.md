<cn>
#### 加载中状态
添加 `loading` 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。
</cn>

<us>
#### Loading
A loading indicator can be added to a button by setting the `loading` property on the `Button`.
</us>

```vue
<template>
  <div>
    <o-button type="primary" loading>
      Loading
    </o-button>
    <o-button type="primary" size="small" loading>
      Loading
    </o-button>
    <br />
    <o-button type="primary" :loading="loading" @mouseenter="enterLoading">
      mouseenter me!
    </o-button>
    <o-button type="primary" icon="poweroff" :loading="iconLoading" @click="enterIconLoading">
      延迟1s
    </o-button>
    <br />
    <o-button type="primary" loading />
    <o-button type="primary" shape="circle" loading />
    <o-button type="danger" shape="round" loading />
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
