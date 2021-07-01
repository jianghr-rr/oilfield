<cn>
#### 含有辅助性文字介绍
含有辅助性文字介绍的警告提示。
</cn>

<us>
#### Description
Additional description for alert message.
</us>

```vue
<template>
  <div>
    <o-alert message="Success Text" type="success">
      <p slot="description">
        Success Description <span style="color: red">Success</span> Description Success Description
      </p>
    </o-alert>
    <o-alert
      message="Info Text"
      description="Info Description Info Description Info Description Info Description"
      type="info"
    />
    <o-alert
      message="Warning Text"
      description="Warning Description Warning Description Warning Description Warning Description"
      type="warning"
    />
    <o-alert
      message="Error Text"
      description="Error Description Error Description Error Description Error Description"
      type="error"
    />
  </div>
</template>
```
