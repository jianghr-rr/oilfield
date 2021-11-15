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
    <o-progress type="circle" :percent="75" strokeColor="#990F0F" />
    <o-progress type="circle" :percent="70" status="exception" strokeColor="#F27F0C" >
      <template #format="percent">
        <span style="color: #F27F0C;fontSize: 20px">X</span>
      </template>
    </o-progress>
    <o-progress type="circle" :percent="100" strokeColor="#258006" >
    </o-progress>
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
