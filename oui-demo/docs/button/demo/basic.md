<cn>
#### 按钮类型
按钮有五种类型：主按钮、次按钮、虚线按钮、危险按钮和链接按钮。主按钮在同一个操作区域最多出现一次。
</cn>

<us>
#### Type
There are `primary` button, `default` button, `dashed` button , `danger` button and `link` button in antd.
</us>

```vue
<template>
  <div>
    <o-button type="primary">
      Primary123
    </o-button>
    <o-button>Default</o-button>
    <o-button type="dashed">
      Dashed
    </o-button>
    <o-button type="danger">
      Danger
    </o-button>
    <o-config-provider :auto-insert-space-in-button="false">
      <o-button type="primary">
        按钮
      </o-button>
    </o-config-provider>
    <o-button type="primary">
      按钮
    </o-button>
    <o-button type="link">
      Link
    </o-button>
  </div>
</template>
```
