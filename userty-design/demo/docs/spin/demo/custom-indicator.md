<cn>
#### 自定义指示符
使用自定义指示符。
</cn>

<us>
#### Custom spinning indicator
Use custom loading indicator.
</us>

```vue
<template>
  <div>
    <o-spin>
      <o-icon slot="indicator" type="loading" style="font-size: 24px" spin />
    </o-spin>
    <o-spin :indicator="indicator" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      indicator: <o-icon type="loading" style="font-size: 24px" spin />,
    };
  },
};
</script>
```
