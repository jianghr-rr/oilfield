<cn>
#### 带图标的步骤条
通过设置 `Steps.Step` 的 `icon` 属性，可以启用自定义图标。
</cn>

<us>
#### With icon
You can use your own custom icons by setting the property `icon` for `Steps.Step`.
</us>

```vue
<template>
  <o-steps>
    <o-step status="finish" title="Login">
      <o-icon slot="icon" type="user" />
    </o-step>
    <o-step status="finish" title="Verification">
      <o-icon slot="icon" type="solution" />
    </o-step>
    <o-step status="process" title="Pay">
      <o-icon slot="icon" type="loading" />
    </o-step>
    <o-step status="wait" title="Done">
      <o-icon slot="icon" type="smile-o" />
    </o-step>
  </o-steps>
</template>
```
