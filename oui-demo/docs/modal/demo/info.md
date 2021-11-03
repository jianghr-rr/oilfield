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
    <o-button @click="info">
      Info
    </o-button>
    <o-button @click="success">
      Success
    </o-button>
    <o-button @click="error">
      Error
    </o-button>
    <o-button @click="warning">
      Warning
    </o-button>
  </div>
</template>
<script>
import { Modal } from 'userty-design';
export default {
  methods: {
    info() {
      const h = this.$createElement;
      this.$ominfo({
        title: 'This is a notification message',
        content: h('div', {}, [
          h('p', 'some messages...some messages...'),
          h('p', 'some messages...some messages...'),
        ]),
        onOk() {},
      });
    },

    success() {
      this.$omsuccess({
        title: 'This is a success message',
        // JSX support
        content: (
          <div>
            <p>some messages...some messages...</p>
            <p>some messages...some messages...</p>
          </div>
        ),
      });
    },

    error() {
      this.$omerror({
        title: 'This is an error message',
        content: 'some messages...some messages...',
      });
    },

    warning() {
      this.$omwarning({
        title: 'This is a warning message',
        content: 'some messages...some messages...',
      });
    },
  },
};
</script>
```
