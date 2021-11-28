<cn>
#### 可选择
可通过 `CheckableTag` 实现类似 Checkbox 的效果，点击切换选中效果。
</cn>

<us>
#### Checkable
`CheckableTag` works like Checkbox, click it to toggle checked state.
> it is an absolute controlled component and has no uncontrolled mode.
</us>

```vue
<template>
  <div>
    <o-checkable-tag v-model="checked1" @change="handleChange">
      标签 1
    </o-checkable-tag>
    <o-checkable-tag v-model="checked2" @change="handleChange">
      标签 2
    </o-checkable-tag>
    <o-checkable-tag v-model="checked3" @change="handleChange">
      标签 3
    </o-checkable-tag>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked1: false,
      checked2: false,
      checked3: false,
    };
  },
  methods: {
    handleChange(checked) {
      console.log(checked);
    },
  },
};
</script>
```
