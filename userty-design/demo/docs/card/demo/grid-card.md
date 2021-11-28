<cn>
#### 卡片阴影
可对阴影的显示进行配置。
</cn>

<us>
#### Grid card
Grid style card content.
</us>

```vue
<template>
  <o-card :bordered="false">
    <o-card-grid style="width:30%;text-align:center;box-shadow:0 2px 8px rgb(0 0 0 / 15%)" :hoverable="false">
      总是显示
    </o-card-grid>
    <o-card-grid style="width:30%;text-align:center;margin:0 10px" :hoverable="false">
      从不显示
    </o-card-grid>
    <o-card-grid style="width:30%;text-align:center">
      鼠标悬浮时显示
    </o-card-grid>
  </o-card>
</template>
```
