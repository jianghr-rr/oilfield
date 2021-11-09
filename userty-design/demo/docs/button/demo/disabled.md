<cn>
#### 禁用状态
添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
</cn>

<us>
#### Disabled
To mark a button as disabled, add the `disabled` property to the `Button`.
</us>

```vue
<template>
  <div>
    <o-button type="primary" disabled :style="{padding: '0 30px'}">
      按钮
    </o-button>
    <o-button type="primary" disabled :style="{padding: '0 30px'}">
      按钮
    </o-button>
    <o-button disabled :style="{padding: '0 30px', background: 'none'}">
      按钮
    </o-button>
    <br />
    <o-button type="primary" disabled :style="{padding: '0 30px', borderRadius: '18px'}">
      按钮
    </o-button>
    <o-button type="primary" disabled :style="{padding: '0 30px', borderRadius: '18px'}">
      按钮
    </o-button>
    <o-button disabled :style="{padding: '0 30px', borderRadius: '18px', background: 'none'}">
      按钮
    </o-button>
    <o-button disabled type="dashed" :style="{padding: '0 30px'}">
      按钮
    </o-button>
    <o-button disabled :style="{border: 'none', background: 'none'}">
      文本按钮
    </o-button>
    <o-button disabled type="link">
      链接按钮
    </o-button>
  </div>
</template>
```
