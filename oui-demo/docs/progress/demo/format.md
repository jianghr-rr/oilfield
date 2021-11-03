<cn>
#### 自定义文字格式
`format` 属性指定格式。
</cn>

<us>
#### Custom text format
You can set a custom text by setting the `format` prop.
</us>

```vue
<template>
  <div>
    <o-progress type="circle" :percent="75" :format="percent => `${percent} Days`" />
    <o-progress type="circle" :percent="100" :format="() => 'Done'" />
    <o-progress type="circle" :percent="75">
      <template #format="percent">
        <span style="color: red">{{ percent }}</span>
      </template>
    </o-progress>
  </div>
</template>
<style scoped>
div.ant-progress-circle,
div.ant-progress-line {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
```
