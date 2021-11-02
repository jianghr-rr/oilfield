<cn>
#### 不可用状态
添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
</cn>

<us>
#### Disabled
To mark a button as disabled, add the `disabled` property to the `Button`.
</us>

```vue
<template>
  <div>
    <o-button type="primary">
      Primary
    </o-button>
    <o-button type="primary" disabled>
      Primary(disabled)
    </o-button>
    <br />
    <o-button>Default</o-button>
    <o-button disabled>
      Default(disabled)
    </o-button>
    <br />
    <o-button type="dashed">
      Dashed
    </o-button>
    <o-button type="dashed" disabled>
      Dashed(disabled)
    </o-button>
    <br />
    <o-button type="link">
      Link
    </o-button>
    <o-button type="link" disabled>
      Link(disabled)
    </o-button>
    <div :style="{ padding: '8px 8px 0 8px', background: 'rgb(190, 200, 200)' }">
      <o-button ghost>
        Ghost
      </o-button>
      <o-button ghost disabled>
        Ghost(disabled)
      </o-button>
    </div>
  </div>
</template>
```
