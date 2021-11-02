<cn>
#### 进度圈
圈形的进度。
</cn>

<us>
#### Circular progress bar
A circular progress bar.
</us>

```vue
<template>
  <div>
    <o-progress type="circle" :percent="75" />
    <o-progress type="circle" :percent="70" status="exception" />
    <o-progress type="circle" :percent="100" />
  </div>
</template>
<style scoped>
.ant-progress-circle-wrap,
.ant-progress-line-wrap {
  margin-right: 8px;
  margin-bottom: 5px;
}
</style>
```
