<cn>
#### 类型
支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。
</cn>

<us>
#### Type
Image, Icon and letter are supported, and the latter two kinds avatar can have custom colors and background colors.
</us>

```vue
<template>
  <div>
    <o-avatar icon="user" />
    <o-avatar>
      <a-icon slot="icon" type="user" />
    </o-avatar>
    <o-avatar>U</o-avatar>
    <o-avatar>USER</o-avatar>
    <o-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <o-avatar style="color: #f56a00; backgroundColor: #fde3cf">
      U
    </o-avatar>
    <o-avatar style="backgroundColor:#87d068" icon="user" />
  </div>
</template>
```
