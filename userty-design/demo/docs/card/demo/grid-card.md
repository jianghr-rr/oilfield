<cn>
####  网格型内嵌卡片
一种常见的卡片内容区隔模式。
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
