<cn>
#### 分段进度条
标准的进度条。
</cn>

<us>
#### Progress bar with success segment
A standard progress bar.
</us>

```vue
<template>
  <div>
    <o-tooltip title="3 done / 3 in progress / 4 to do">
      <o-progress :percent="60" :success-percent="30" />
    </o-tooltip>
    <o-tooltip title="3 done / 3 in progress / 4 to do">
      <o-progress :percent="60" :success-percent="30" type="circle" />
    </o-tooltip>
    <o-tooltip title="3 done / 3 in progress / 4 to do">
      <o-progress :percent="60" :success-percent="30" type="dashboard" />
    </o-tooltip>
  </div>
</template>
```
