<cn>
#### 基本
弹出一个对话框。
</cn>

<us>
#### Basic
Basic modal.
</us>

```vue
<template>
  <div>
    <o-button type="primary" @click="showModal">
      打开对话框
    </o-button>
    <o-modal v-model="visible" title="提示" @ok="handleOk">
      <p style="padding: 25px 0;">这是一段文字信息</p>
      <template slot="footer">
        <o-button key="back" @click="handleCancel">
          取消
        </o-button>
        <o-button key="submit" type="primary" :loading="loading" @click="handleOk">
          确定
        </o-button>
      </template>
    </o-modal>
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
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
    handleCancel(e) {
      console.log(e);
      this.visible = false;
    },
  },
};
</script>
```
