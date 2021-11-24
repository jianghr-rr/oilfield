<cn>
#### 带徽标的头像
通常用于消息提示。
</cn>

<us>
#### With Badge
Usually used for reminders and notifications.
</us>

```vue
<template>
  <div>
    <span style="margin-right:24px">
      <o-badge :count="1" :number-style="{ backgroundColor: '#990F0F' }"><o-avatar :size="50" shape="square" icon="user"/></o-badge>
    </span>
    <span>
      <o-badge dot :color="'#990F0F'"><o-avatar :size="50" shape="square" icon="user"/></o-badge>
    </span>
  </div>
</template>
```
