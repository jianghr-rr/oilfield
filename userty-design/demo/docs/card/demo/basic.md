<cn>
#### 典型卡片
包含标题、内容、操作区域。
</cn>

<us>
#### Basic card
A basic card containing a title, content and an extra corner content.
Supports two sizes: `default` and `small`.
</us>

```vue
<template>
  <div>
    <o-card title="卡片名称" style="width: 300px">
      <a slot="extra" href="#">操作按钮</a>
      <p>列表内容 1</p>
      <p>列表内容 2</p>
      <p>列表内容 3</p>
    </o-card>
  </div>
</template>
```
