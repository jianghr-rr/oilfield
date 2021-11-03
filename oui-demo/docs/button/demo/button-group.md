<cn>
#### 按钮组合
可以将多个 `Button` 放入 `Button.Group` 的容器中。
通过设置 `size` 为 `large` `small` 分别把按钮组合设为大、小尺寸。若不设置 `size`，则尺寸为中。
</cn>

<us>
#### Button Group
Buttons can be grouped by placing multiple `Button` components into a `Button.Group`.
The `size` can be set to `large`, `small` or left unset resulting in a default size.
</us>

```vue
<template>
  <div id="components-button-demo-button-group">
    <h4>Basic</h4>
    <o-button-group>
      <o-button>Cancel</o-button>
      <o-button type="primary">
        OK
      </o-button>
    </o-button-group>
    <o-button-group>
      <o-button disabled>
        L
      </o-button>
      <o-button disabled>
        M
      </o-button>
      <o-button disabled>
        R
      </o-button>
    </o-button-group>
    <o-button-group>
      <o-button type="primary">
        L
      </o-button>
      <o-button>M</o-button>
      <o-button>M</o-button>
      <o-button type="dashed">
        R
      </o-button>
    </o-button-group>

    <h4>With Icon</h4>
    <o-button-group>
      <o-button type="primary"> <o-icon type="left" />Go back </o-button>
      <o-button type="primary"> Go forward<o-icon type="right" /> </o-button>
    </o-button-group>
    <o-button-group>
      <o-button type="primary" icon="cloud" />
      <o-button type="primary" icon="cloud-download" />
    </o-button-group>
  </div>
</template>
<style>
#components-button-demo-button-group > h4 {
  margin: 16px 0;
  font-size: 14px;
  line-height: 1;
  font-weight: normal;
}
#components-button-demo-button-group > h4:first-child {
  margin-top: 0;
}
#components-button-demo-button-group .ant-btn-group {
  margin-right: 8px;
}
</style>
```
