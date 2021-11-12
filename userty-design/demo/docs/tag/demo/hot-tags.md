<cn>
#### 热门标签
选择你感兴趣的话题。
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
