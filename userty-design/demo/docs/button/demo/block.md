<cn>
#### block 按钮
`block`属性将使按钮适合其父宽度。
</cn>

<us>
#### block Button
`block` property will make the button fit to its parent width.
</us>

```vue
<template>
  <div>
    <o-button type="primary" block>
      Primary
    </o-button>
    <o-button type="primary" block :style="{boxShadow: '3px 3px 4px 0px #E6E6E6'}">
      Primary
    </o-button>
    <o-button block>
      Default
    </o-button>
    <o-button type="dashed" block>
      Dashed
    </o-button>
    <o-button type="primary" block :style="{borderRadius: '18px'}">
      Primary
    </o-button>
    <o-button type="primary" block :style="{boxShadow: '3px 3px 4px 0px #E6E6E6', borderRadius: '18px'}">
      Primary
    </o-button>
    <o-button block :style="{borderRadius: '18px'}">
      Default
    </o-button>
  </div>
</template>
```
