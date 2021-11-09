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
    <o-button type="primary" :style="{padding: '0 30px'}">
      按钮
    </o-button>
    <o-button type="primary" :style="{padding: '0 30px', boxShadow: '3px 3px 4px 0px #E6E6E6'}">
      按钮
    </o-button>
    <o-button :style="{padding: '0 30px'}">
      按钮
    </o-button>
    <o-button type="primary" :style="{padding: '0 30px', borderRadius: '18px'}">
      按钮
    </o-button>
    <o-button type="primary" :style="{padding: '0 30px', borderRadius: '18px', boxShadow: '3px 3px 4px 0px #E6E6E6'}">
      按钮
    </o-button>
    <o-button :style="{padding: '0 30px', borderRadius: '18px'}">
      按钮
    </o-button>
    <o-button type="dashed" :style="{padding: '0 30px'}">
      按钮
    </o-button>
    <o-button :style="{border: 'none'}">
      文本按钮
    </o-button>
    <o-button type="link">
      链接按钮
    </o-button>
  </div>
</template>
```
