<cn>
#### 幽灵按钮
幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。
</cn>

<us>
#### Ghost Button
`ghost` property will make button's background transparent, it is common used in colored background.
</us>

```vue
<template>
  <div :style="{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }">
    <o-button type="primary" ghost>
      Primary
    </o-button>
    <o-button ghost>
      Default
    </o-button>
    <o-button type="dashed" ghost>
      Dashed
    </o-button>
    <o-button type="danger" ghost>
      Danger
    </o-button>
    <o-button type="link" ghost>
      Link
    </o-button>
  </div>
</template>
```
