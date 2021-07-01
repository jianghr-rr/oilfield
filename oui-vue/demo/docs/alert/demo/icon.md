<cn>
#### 图标
可口的图标让信息类型更加醒目。
</cn>

<us>
#### Icon
Decent icon make information more clear and more friendly.
</us>

```vue
<template>
  <div>
    <o-alert message="Success Tips" type="success" show-icon />
    <o-alert message="Informational Notes" type="info" show-icon />
    <o-alert message="Warning" type="warning" show-icon />
    <o-alert message="Error" type="error" show-icon />
    <o-alert
      message="Success Tips"
      description="Detailed description and advices about successful copywriting."
      type="success"
      show-icon
    />
    <o-alert
      message="Informational Notes"
      description="Additional description and informations about copywriting."
      type="info"
      show-icon
    />
    <o-alert
      message="Warning"
      description="This is a warning notice about copywriting."
      type="warning"
      show-icon
    />
    <o-alert
      message="Error"
      description="This is an error message about copywriting."
      type="error"
      show-icon
    />
  </div>
</template>
```
