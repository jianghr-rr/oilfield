<cn>
#### 居中布局
标题和底部导航可在水平居中。
</cn>

<us>
#### Customized Footer
A more complex example which define a customized footer button bar,
the dialog will change to loading state after clicking submit button, when the loading is over,
the modal dialog will be closed.
You could set `footer` to `null` if you don't need default footer buttons.
</us>

```vue
<template>
  <div>
    <o-button type="primary" @click="showModal">
      打开对话框
    </o-button>
    <o-modal v-model="visible" title="提示" on-ok="handleOk">
      <template slot="footer">
        <div style="text-align: center">
          <o-button key="back" @click="handleCancel">
            取消
          </o-button>
          <o-button key="submit" type="primary" :loading="loading" @click="handleOk">
            确定
          </o-button>
        </div>
      </template>
      <p>这是一段文字信息</p>
    </o-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      visible: false,
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      this.loading = true;
      setTimeout(() => {
        this.visible = false;
        this.loading = false;
      }, 3000);
    },
    handleCancel(e) {
      this.visible = false;
    },
  },
};
</script>
```
