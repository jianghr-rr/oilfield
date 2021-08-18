<cn>
#### 控制关闭状态
通过 `visible` 属性控制关闭状态。
</cn>

<us>
#### Controlled
By using the `visible` prop, you can control the close state of Tag.
</us>

```vue
<template>
  <div>
    <o-tag v-model="visible" closable>
      Movies
    </o-tag>
    <br />
    <o-button size="small" @click="visible = !visible">
      Toggle
    </o-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: true,
    };
  },
};
</script>
```
