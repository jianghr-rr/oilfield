<cn>
  #### 内部卡片
  可以放在普通卡片内部，展示多层级结构的信息
</cn>

<us>
  #### Inner card
  It can be placed inside the ordinary card to display the information of the multilevel structure
</us>

```vue
<template>
  <o-card title="卡片名称">
    <o-card title="内部卡片 1">
      <a slot="extra" href="#">操作按钮</a>
      卡片内容 1
    </o-card>
    <o-card title="内部卡片 1" :style="{ marginTop: '16px' }">
      <a slot="extra" href="#">操作按钮</a>
      卡片内容 1
    </o-card>
  </o-card>
</template>
```
