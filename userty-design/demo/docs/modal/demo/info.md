<cn>
#### 信息提示
各种类型的信息提示，只提供一个按钮用于关闭。
</cn>

<us>
#### Information modal dialog
In the various types of information modal dialog, only one button to close dialog is provided.
</us>

```vue
<template>
  <div>
    <o-button type="primary" @click="success">
      成功对话框
    </o-button>
    <o-button type="primary" @click="warning">
      警告对话框
    </o-button>
    <o-button type="primary" @click="error">
      提示对话框
    </o-button>
  </div>
</template>
<script>
import { Modal } from 'ant-design-vue';
export default {
  methods: {

    success() {
      this.$omsuccess({
        title: '这是一条成功的信息',
        // JSX support
        content: (
          <div>
            <p>这是一段文字信息</p>
            <p>这是一段文字信息</p>
            <p>这是一段文字信息</p>
          </div>
        ),
      });
    },

    error() {
      this.$omerror({
        title: '这是一条错误的信息',
        content: (
          <div>
            <p>这是一段文字信息</p>
            <p>这是一段文字信息</p>
            <p>这是一段文字信息</p>
          </div>
        ),
      });
    },

    warning() {
      this.$omwarning({
        title: '这是一条警告的信息',
        content: (
          <div>
            <p>这是一段文字信息</p>
            <p>这是一段文字信息</p>
            <p>这是一段文字信息</p>
          </div>
        ),
      });
    },
  },
};
</script>
```
