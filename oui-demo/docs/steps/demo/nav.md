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
        title="Step 1"
        sub-title="00:00:05"
        status="finish"
        description="This is a description."
      />
      <o-step
        title="Step 2"
        sub-title="00:01:02"
        status="process"
        description="This is a description."
      />
      <o-step
        title="Step 3"
        sub-title="waiting for longlong time"
        status="wait"
        description="This is a description."
      />
    </o-steps>
    <o-steps v-model="current" type="navigation" :style="stepStyle">
      <o-step status="finish" title="Step 1" />
      <o-step status="process" title="Step 2" />
      <o-step status="wait" title="Step 3" />
      <o-step status="wait" title="Step 4" />
    </o-steps>
    <o-steps v-model="current" type="navigation" size="small" :style="stepStyle">
      <o-step status="finish" title="finish 1" />
      <o-step status="finish" title="finish 2" />
      <o-step status="process" title="current process" />
      <o-step status="wait" title="wait" disabled />
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
