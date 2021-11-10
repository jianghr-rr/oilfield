<cn>
#### 导航步骤
导航类型的步骤条。
</cn>

<us>
#### Navigation Steps
Navigation steps.
</us>

```vue
<template>
  <div>
    <o-steps v-model="current" type="navigation" size="small" :style="stepStyle">
      <o-step
        title="已完成"
        status="finish"
        description="This is a description."
      />
      <o-step
        title="进行中"
        status="process"
        description="This is a description."
      />
      <o-step
        title="等待中"
        status="wait"
        description="This is a description."
      />
    </o-steps>
    <o-steps v-model="current" type="navigation" :style="stepStyle">
      <o-step status="finish" title="已完成" />
      <o-step status="process" title="进行中" />
      <o-step status="wait" title="等待中" />
    </o-steps>
    <o-steps v-model="current" type="navigation" size="small" :style="stepStyle">
      <o-step status="finish" title="已完成" />
      <o-step status="process" title="进行中" />
      <o-step status="wait" title="等待中" />
    </o-steps>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: 0,
      stepStyle: {
        marginBottom: '60px',
        boxShadow: '0px -1px 0 0 #e8e8e8 inset',
      },
    };
  },
};
</script>
```
