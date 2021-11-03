<cn>
#### 顶部公告
页面顶部通告形式，默认有图标且`type` 为 'warning'。
</cn>

<us>
#### Banner
Display Alert as a banner at top of page.
</us>

```vue
<template>
  <div>
    <o-alert message="Warning text" banner />
    <br />
    <o-alert
      message="Very1 long warning text warning text text text text text text text"
      banner
      closable
    />
    <br />
    <o-alert :show-icon="false" message="Warning text without icon" banner />
    <br />
    <o-alert type="error" message="Error text" banner />
  </div>
</template>
```
