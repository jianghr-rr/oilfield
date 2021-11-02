<cn>
#### 基本用法
基本标签的用法，可以通过添加 `closable` 变为可关闭标签。可关闭标签具有 `close` 两个事件。
</cn>

<us>
#### basic Usage
Usage of basic Tag, and it could be closable by set `closable` property. Closable Tag supports `close` events.
</us>

```vue
<template>
  <div>
    <o-tag>Tag 1</o-tag>
    <o-tag><a href="https://github.com/vueComponent/ant-design">Link</a></o-tag>
    <o-tag closable @close="log">
      Tag 2
    </o-tag>
    <o-tag closable @close="preventDefault">
      Prevent Default
    </o-tag>
  </div>
</template>
<script>
export default {
  methods: {
    log(e) {
      console.log(e);
    },
    preventDefault(e) {
      e.preventDefault();
      console.log('Clicked! But prevent default.');
    },
  },
};
</script>
```
