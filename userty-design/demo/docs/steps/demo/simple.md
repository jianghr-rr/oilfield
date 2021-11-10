<cn>
#### 基本用法
简单的步骤条。
</cn>

<us>
#### Basic
The most basic step bar.
</us>

```vue
<template>
  <o-steps :current="1">
    <o-step>
      <!-- <span slot="title">Finished</span> -->
      <template slot="title">
        已完成
      </template>
      <span slot="description">这是一个步骤说明。</span>
    </o-step>
    <o-step title="进行中" description="这是一个步骤说明。" />
    <o-step title="等待中" description="这是一个步骤说明。" />
  </o-steps>
</template>
```
