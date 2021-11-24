<cn>
#### 头像类型
支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。
</cn>

<us>
#### Type
Image, Icon and letter are supported, and the latter two kinds avatar can have custom colors and background colors.
</us>

```vue
<template>
  <div>
    <o-avatar :size="40" :style="{marginRight: '10px'}">USER</o-avatar>
    <o-avatar :size="30" :style="{marginRight: '10px'}">U</o-avatar>
    <o-avatar :size="30" :style="{marginRight: '10px'}">新</o-avatar>
    <o-avatar :size="30" :style="{marginRight: '10px'}">
      <a-icon slot="icon" type="user" />
    </o-avatar>
    <p :style="{width: '100%', height: '1PX',marginBottom: '10px'}"/>
    <o-avatar :size="30" style="color: #990F0F; backgroundColor: #F5E7E7; marginRight: 10px">
      U
    </o-avatar>
    <o-avatar :size="30" style="color: #990F0F; backgroundColor: #F5E7E7; marginRight: 10px">
      新
    </o-avatar>
    <o-avatar :size="30" style="color: #fff; backgroundColor: #990F0F; marginRight: 10px">
      新
    </o-avatar>
    <o-avatar class='temp' :size="30" src="/avatar-2.png" style="backgroundColor: #BDE9FF; marginRight: 10px" />
    <o-avatar class='temp' :size="30" src="/avatar-1.png" style="backgroundColor: #BDE9FF; marginRight: 10px" />
  </div>
</template>
<style>
  .temp {
    text-align: center;
  }
  .temp>img {
    width: 26px;
    height: 26px;
    margin: 4px auto 0 auto;
  }
</style>
```
