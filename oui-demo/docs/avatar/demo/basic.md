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
      <o-avatar :size="64" icon="user" />
      <o-avatar size="large" icon="user" />
      <o-avatar icon="user" />
      <o-avatar size="small" icon="user" />
    </div>
    <br />
    <div>
      <o-avatar shape="square" :size="64" icon="user" />
      <o-avatar shape="square" size="large" icon="user" />
      <o-avatar shape="square" icon="user" />
      <o-avatar shape="square" size="small" icon="user" />
    </div>
  </div>
</template>
```
