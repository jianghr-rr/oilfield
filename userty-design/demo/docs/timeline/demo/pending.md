<cn>
#### 自定义时间卡片
当内容在垂直方向上过高时，可将时间卡片置于内容之上。
</cn>

<us>
#### Last node
When the timeline is incomplete and ongoing, put a ghost node at last. Set `pending` as truthy value to enable displaying pending item. You can customize the pending content by passing a React Element. Meanwhile, `slot="pendingDot"` is used to customize the dot of the pending item.
`reverse={true}` is used for reversing nodes.
</us>

```vue
<template>
  <div>
    <o-timeline>
      <o-timeline-item>
        <p>2021-11-06</p>
        <div class="card">
          <p>更新 Xinjiang Userty</p>
          <p class="p1">江小新 提交于 2021-11-12 14:27</p>
        </div>
      </o-timeline-item>
      <o-timeline-item>
        <p>2021-11-06</p>
        <div class="card">
          <p>更新 Xinjiang Userty</p>
          <p class="p1">江小新 提交于 2021-11-12 14:27</p>
        </div>
      </o-timeline-item>
      <o-timeline-item>
        <p>2021-11-06</p>
        <div class="card">
          <p>更新 Xinjiang Userty</p>
          <p class="p1">江小新 提交于 2021-11-12 14:27</p>
        </div>
      </o-timeline-item>
    </o-timeline>
  </div>
</template>
<script>
export default {
  data() {
    return {
      reverse: false,
    };
  },
  methods: {
    handleClick() {
      this.reverse = !this.reverse;
    },
  },
};
</script>
<style lang="less">
  .card {
    width: 330px;
    background: #FFFFFF;
    border: 1px solid #FAFAFA;
    box-shadow: 0px 0px 9px 1px rgba(215, 215, 215, 0.35);
    padding: 20px 20px 10px 20px;
    p {
      line-height: 14px
    }
    .p1 {
      color: #AAAAAA;
    }
  }
</style>
```
