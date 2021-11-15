<cn>
#### 竖直方向的步骤条
简单的竖直方向的步骤条。
</cn>

<us>
#### Vertical
A simple step bar in the vertical direction.
</us>

```vue
<template>
  <o-steps direction="vertical" :current="1">
    <o-step title="完成"
      description="这是一个步骤说明。"
    />
    <o-step title="进行中" description="这是一个步骤说明。" />
    <o-step title="等待中" description="这是一个步骤说明。" />
  </o-steps>
</template>
```
