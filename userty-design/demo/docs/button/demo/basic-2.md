<cn>
#### 警告按钮
在 Xinjiang Userty Design 中，警告成为一种按钮属性，可根据需要改变的属性从而自动改变按钮颜色。
</cn>

<us>
#### Type
There are `primary` button, `default` button, `dashed` button , `danger` button and `link` button in antd.
</us>

```vue
<template>
  <div>
    <o-button type="warn" :style="{padding: '0 30px'}">
      按钮
    </o-button>
    <o-button type="warn" :style="{padding: '0 30px', boxShadow: '3px 3px 4px 0px #E6E6E6'}">
      按钮
    </o-button>
    <o-button :style="{padding: '0 30px', boxShadow: '3px 3px 4px 0px #E6E6E6', border: '1px solid #F27F0C', color: '#F27F0C'}">
      按钮
    </o-button>
    <o-button type="warn" :style="{padding: '0 30px', borderRadius: '18px'}">
      按钮
    </o-button>
    <o-button type="warn" :style="{padding: '0 30px', borderRadius: '18px'}">
      按钮
    </o-button>
    <o-button :style="{padding: '0 30px', borderRadius: '18px',border: '1px solid #F27F0C', boxShadow: '3px 3px 4px 0px #E6E6E6', color: '#F27F0C'}">
      按钮
    </o-button>
    <o-button type="dashed" :style="{padding: '0 30px', border: '1px solid #F27F0C', color: '#F27F0C'}">
      按钮
    </o-button>
    <o-button type="link" :style="{color: '#F27F0C'}">
      链接按钮
    </o-button>
  </div>
</template>
```
