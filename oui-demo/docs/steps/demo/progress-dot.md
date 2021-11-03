<cn>
#### 点状步骤条
包含步骤点的进度条。
</cn>

<us>
#### Dot Style
Steps with progress dot style.
</us>

```vue
<template>
  <div>
    <o-steps progress-dot :current="1">
      <o-step title="Finished" description="This is a description." />
      <o-step title="In Progress" description="This is a description." />
      <o-step title="Waiting" description="This is a description." />
    </o-steps>
    <o-divider />
    <o-steps progress-dot :current="1" direction="vertical">
      <o-step title="Finished" description="This is a description. This is a description." />
      <o-step title="Finished" description="This is a description. This is a description." />
      <o-step title="In Progress" description="This is a description. This is a description." />
      <o-step title="Waiting" description="This is a description." />
      <o-step title="Waiting" description="This is a description." />
    </o-steps>
  </div>
</template>
```
