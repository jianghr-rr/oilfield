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
      线框标签:
    </h4>
    <div>
      <o-tag color="#990F0F">
        标签 1
      </o-tag>
      <o-tag color="#E5B217">
        标签 2
      </o-tag>
      <o-tag color="#0060E5">
        标签 3
      </o-tag>
    </div>
    <div>
      <o-tag color="#258006">
        成功色
      </o-tag>
      <o-tag color="#F27F0C">
        警告色
      </o-tag>
      <o-tag color="#828899">
        提示色
      </o-tag>
    </div>
    <h4 style="margin: '16px 0'">
      填充标签:
    </h4>
    <div>
      <o-tag color="#F5E7E7" style="border: 1px solid #990F0F; color: #990F0F">
        标签 1
      </o-tag>
      <o-tag color="#FCF7E7" style="border: 1px solid #E5B217; color: #E5B217">
        标签 2
      </o-tag>
      <o-tag color="#E5EFFC" style="border: 1px solid #0060E5; color: #0060E5">
        标签 3
      </o-tag>
    </div>
  </div>
</template>
```
