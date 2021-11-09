<cn>
#### 基本
头像有三种尺寸，两种形状可选。
</cn>

<us>
#### basic
Three sizes and two shapes are available.
</us>

```vue
<template>
  <div>
    <div>
      <o-avatar :size="50" icon="user" :style="{marginRight: '10px'}" />
      <o-avatar :size="40" icon="user" :style="{marginRight: '10px'}"/>
      <o-avatar :size="30" icon="user" :style="{marginRight: '10px'}"/>
      <o-avatar :size="20" icon="user" :style="{marginRight: '10px'}"/>
    </div>
    <br />
    <div>
      <o-avatar shape="square" :size="50" icon="user" :style="{marginRight: '10px'}"/>
      <o-avatar shape="square" :size="40" icon="user" :style="{marginRight: '10px'}"/>
      <o-avatar shape="square" :size="30" icon="user" :style="{marginRight: '10px'}"/>
      <o-avatar shape="square" :size="20" icon="user" :style="{marginRight: '10px'}"/>
    </div>
  </div>
</template>
```
