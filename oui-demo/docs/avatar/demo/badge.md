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
      <o-badge :count="1"><o-avatar shape="square" icon="user"/></o-badge>
    </span>
    <span>
      <o-badge dot><o-avatar shape="square" icon="user"/></o-badge>
    </span>
  </div>
</template>
```
