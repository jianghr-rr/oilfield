<cn>
#### 图标标签
当需要在`tag`内嵌入`icon`时，可以设置`icon`属性，或者直接在`tag`内使用`icon`组件。
</cn>

<us>
#### Hot Tags
Select your favourite topics.
</us>

```vue
<template>
  <div>
    <a-checkable-tag
    >
      <o-icon type="plus-circle" /> 标签 1
    </a-checkable-tag>
    <a-checkable-tag
    >
      <o-icon type="minus-circle" /> 标签 2
    </a-checkable-tag>
    <o-tag closable @close="log">
      关闭标签
    </o-tag>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked1: false,
      checked2: false,
      checked3: false,
      tags: ['Movies', 'Books'],
      selectedTags: [],
    };
  },
  methods: {
    handleChange(tag, checked) {
      const { selectedTags } = this;
      const nextSelectedTags = checked
        ? [...selectedTags, tag]
        : selectedTags.filter(t => t !== tag);
      console.log('You are interested in: ', nextSelectedTags);
      this.selectedTags = nextSelectedTags;
    },
  },
};
</script>
```
