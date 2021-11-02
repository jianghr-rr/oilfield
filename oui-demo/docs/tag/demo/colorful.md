<cn>
#### 多彩标签
我们添加了多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。
</cn>

<us>
#### Colorful Tag
We preset a series of colorful tag styles for use in different situations. You can also set it to a hex color string for custom color.
</us>

```vue
<template>
  <div>
    <h4 style="margin-bottom: 16px">
      Presets:
    </h4>
    <div>
      <o-tag color="pink">
        pink
      </o-tag>
      <o-tag color="red">
        red
      </o-tag>
      <o-tag color="orange">
        orange
      </o-tag>
      <o-tag color="green">
        green
      </o-tag>
      <o-tag color="cyan">
        cyan
      </o-tag>
      <o-tag color="blue">
        blue
      </o-tag>
      <o-tag color="purple">
        purple
      </o-tag>
    </div>
    <h4 style="margin: '16px 0'">
      Custom:
    </h4>
    <div>
      <o-tag color="#f50">
        #f50
      </o-tag>
      <o-tag color="#2db7f5">
        #2db7f5
      </o-tag>
      <o-tag color="#87d068">
        #87d068
      </o-tag>
      <o-tag color="#108ee9">
        #108ee9
      </o-tag>
    </div>
  </div>
</template>
```
