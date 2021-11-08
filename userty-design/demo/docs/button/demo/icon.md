<cn>
#### 图标按钮
当需要在 `Button` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Button` 内使用 `Icon` 组件。
如果想控制 `Icon` 具体的位置，只能直接使用 `Icon` 组件，而非 `icon` 属性。
</cn>

<us>
#### Icon
`Button` components can contain an `Icon`. This is done by setting the `icon` property or placing an `Icon` component within the `Button`
If you want specific control over the positioning and placement of the `Icon`, then that should be done by placing the `Icon` component within the `Button` rather than using the `icon` property.
</us>

```vue
<template>
  <div>
    <o-button type="primary" icon="edit" />
    <o-button type="primary" icon="edit">
      编辑文本
    </o-button>
    <o-button type="primary" icon="edit" :style="{boxShadow: '3px 3px 4px 0px #E6E6E6'}" />
    <o-button type="primary" icon="edit" :style="{boxShadow: '3px 3px 4px 0px #E6E6E6'}">
      编辑文本
    </o-button>
    <br/>
    <o-button type="primary" shape="circle" icon="edit"/>
    <o-button type="primary" icon="edit" :style="{
      borderRadius: '18px'
    }">
      编辑文本
    </o-button>
    <o-button type="primary" shape="circle" icon="edit" :style="{boxShadow: '3px 3px 4px 0px #E6E6E6'}" />
    <o-button type="primary" icon="edit" :style="{boxShadow: '3px 3px 4px 0px #E6E6E6', borderRadius: '18px'}">
      编辑文本
    </o-button>
    <br/>
    <o-button icon="edit"/>
    <o-button icon="edit">
      编辑文本
    </o-button>
    <o-button shape="circle" icon="edit" :style="{boxShadow: '3px 3px 4px 0px #E6E6E6'}" />
    <o-button icon="edit" :style="{boxShadow: '3px 3px 4px 0px #E6E6E6', borderRadius: '18px'}">
      编辑文本
    </o-button>
    <br/>
    <o-button type="dashed" icon="edit"/>
    <o-button icon="edit" type="dashed">
      编辑文本
    </o-button>
  </div>
</template>
```
