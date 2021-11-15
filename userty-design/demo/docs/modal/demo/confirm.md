<cn>
#### 确认对话框
使用 `confirm()` 可以快捷地弹出确认框。
</cn>

<us>
#### Confirmation modal dialog
To use `confirm()` to show a confirmation modal dialog.
</us>

```vue
<template>
  <div>
    <o-button @click="showConfirm">
      Confirm
    </o-button>
    <o-button type="dashed" @click="showDeleteConfirm">
      Delete
    </o-button>
    <o-button type="dashed" @click="showPropsConfirm">
      With extra props
    </o-button>
  </div>
</template>
<script>
export default {
  methods: {
    showConfirm() {
      this.$omconfirm({
        title: 'Do you Want to delete these items?',
        content: h => <div style="color:red;">Some descriptions</div>,
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
        class: 'test',
      });
    },

    showDeleteConfirm() {
      this.$omconfirm({
        title: 'Are you sure delete this task?',
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    },
    showPropsConfirm() {
      this.$omconfirm({
        title: 'Are you sure delete this task?',
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        okButtonProps: {
          props: { disabled: true },
        },
        cancelText: 'No',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    },
  },
};
</script>
```
