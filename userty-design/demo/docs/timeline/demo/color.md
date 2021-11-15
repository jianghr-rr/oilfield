<cn>
#### 圆圈颜色
圆圈颜色，绿色用于已完成、成功状态，红色表示告警或错误状态，蓝色可表示正在进行或其他默认状态。
</cn>

<us>
#### Color
Set the color of circles. `green` means completed or success status, `red` means warning or error, and `blue` means ongoing or other default status.
</us>

```vue
<template>
  <o-timeline>
    <o-timeline-item color="#990F0F">
      <div slot="dot" style="display: flex;
        justify-content: center;
        align-items: center;
        width: 16px;
        height: 16px;
        border: 2px solid #990F0F;
        border-radius: 50%;"
      ><o-icon type="dash" style="font-size: 12px; color: #990F0F"/></div>
      创建成功
    </o-timeline-item>
    <o-timeline-item color="#E5B217">
      支持自定义颜色
    </o-timeline-item>
    <o-timeline-item color="#258006">
      此条表示成功
    </o-timeline-item>
    <o-timeline-item color="#F27F0C">
      <p>此条表示警告</p>
      <p>技术测试 1</p>
      <p>技术测试 2</p>
    </o-timeline-item>
    <o-timeline-item color="#828899">
      <p>此条表示提示</p>
    </o-timeline-item>
    <o-timeline-item>
      <p>默认样式节点</p>
      <p>技术测试 1</p>
      <p>技术测试 2</p>
    </o-timeline-item>
    <o-timeline-item color="#D7D7D7">
      <div slot="dot" style="width: 10px;
        height: 10px;
        background: #D7D7D7;
        border: 2px solid #D7D7D7;
        border-radius: 50%;"
      />
      此条已完成
    </o-timeline-item>
  </o-timeline>
</template>
```
