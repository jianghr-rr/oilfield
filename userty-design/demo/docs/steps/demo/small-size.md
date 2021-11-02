<cn>
#### 迷你版
迷你版的步骤条，通过设置 `<Steps size="small">` 启用。
</cn>

<us>
#### Mini version
By setting like this: `<Steps size="small">`, you can get a mini version.
</us>

```vue
<template>
  <o-steps :current="1" size="small">
    <o-step title="Finished" />
    <o-step title="In Progress" />
    <o-step title="Waiting" />
  </o-steps>
</template>
```
