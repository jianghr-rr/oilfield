<cn>
#### 国际化
设置 `okText` 与 `cancelText` 以自定义按钮文字。
</cn>

<us>
#### Internationalization
To customize the text of the buttons, you need to set `okText` and `cancelText` props.
</us>

```vue
<template>
  <div>
    <o-button type="primary" @click="showModal">
      Modal
    </o-button>
    <o-modal v-model="visible" title="Modal" ok-text="确认" cancel-text="取消" @ok="hideModal">
      <p>Bla bla ...</p>
      <p>Bla bla ...</p>
      <p>Bla bla ...</p>
    </o-modal>
    <br />
    <br />
    <o-button @click="confirm">
      Confirm
    </o-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    hideModal() {
      this.visible = false;
    },
    confirm() {
      this.$omconfirm({
        title: 'Confirm',
        content: 'Bla bla ...',
        okText: '确认',
        cancelText: '取消',
      });
    },
  },
};
</script>
```
