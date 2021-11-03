<cn>
#### 进度条
标准的进度条。
</cn>

<us>
#### Progress bar
A standard progress bar.
</us>

```vue
<template>
  <div>
    <o-progress :percent="30" />
    <o-progress :percent="50" status="active" />
    <o-progress :percent="70" status="exception" />
    <o-progress :percent="100" />
    <o-progress :percent="50" :show-info="false" />
  </div>
</template>
```
