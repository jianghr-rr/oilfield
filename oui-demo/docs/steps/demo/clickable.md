<cn>
#### 可点击
设置 `@change` 后，Steps 变为可点击状态。
</cn>

<us>
#### Clickable
Setting `@change` makes Steps clickable.
</us>

```vue
<template>
  <div>
    <o-steps :current="current" @change="onChange">
      <o-step title="Step 1" description="This is a description." />
      <o-step title="Step 2" description="This is a description." />
      <o-step title="Step 3" description="This is a description." />
    </o-steps>
    <o-divider />
    <o-steps v-model="current" direction="vertical">
      <o-step title="Step 1" description="This is a description." />
      <o-step title="Step 2" description="This is a description." />
      <o-step title="Step 3" description="This is a description." />
    </o-steps>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    onChange(current) {
      console.log('onChange:', current);
      this.current = current;
    },
  },
};
</script>
```
