<cn>
#### 自定义点状步骤条
为点状步骤条增加自定义展示。
</cn>

<us>
#### Customized Dot Style
You can customize the display for Steps with progress dot style.
</us>

```vue
<template>
  <div>
    <o-steps :current="1">
      <o-popover slot="progressDot" slot-scope="{ index, status, prefixCls }">
        <template slot="content">
          <span>step {{ index }} status: {{ status }}</span>
        </template>
        <span :class="`${prefixCls}-icon-dot`" />
      </o-popover>
      <o-step title="Finished" description="You can hover on the dot." />
      <o-step title="In Progress" description="You can hover on the dot." />
      <o-step title="Waiting" description="You can hover on the dot." />
      <o-step title="Waiting" description="You can hover on the dot." />
    </o-steps>
  </div>
</template>
```
