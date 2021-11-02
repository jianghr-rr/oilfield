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
        Finished
      </template>
      <span slot="description">This is a description.</span>
    </o-step>
    <o-step title="In Progress" sub-title="Left 00:00:08" description="This is a description." />
    <o-step title="Waiting" description="This is a description." />
  </o-steps>
</template>
```
