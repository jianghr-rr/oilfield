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
    <o-progress :percent="30" strokeColor="#990F0F" />
    <o-progress :percent="50" status="active" strokeColor="#990F0F" />
    <o-progress :percent="70" status="exception" strokeColor="#F27F0C"/>
    <o-progress :percent="100" strokeColor="#258006"/>
    <o-progress :percent="50" :show-info="false" strokeColor="#990F0F"/>
  </div>
</template>
```
