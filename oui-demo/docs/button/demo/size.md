<cn>
#### 按钮尺寸
按钮有大、中、小三种尺寸。
通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。
</cn>

<us>
#### Size
Ant Design supports a default button size as well as a large and small size.
If a large or small button is desired, set the `size` property to either `large` or `small` respectively. Omit the `size` property for a button with the default size.
</us>

```vue
<template>
  <div>
    <o-radio-group :value="size" @change="handleSizeChange">
      <o-radio-button value="large">
        Large
      </o-radio-button>
      <o-radio-button value="default">
        Default
      </o-radio-button>
      <o-radio-button value="small">
        Small
      </o-radio-button>
    </o-radio-group>
    <br><br>
    <o-button type="primary" :size="size">
      Primary
    </o-button>
    <o-button :size="size">
      Normal
    </o-button>
    <o-button type="dashed" :size="size">
      Dashed
    </o-button>
    <o-button type="danger" :size="size">
      Danger
    </o-button>
    <o-button type="link" :size="size">
      Link
    </o-button>
    <br>
    <o-button type="primary" icon="download" :size="size" />
    <o-button type="primary" shape="circle" icon="download" :size="size" />
    <o-button type="primary" shape="round" icon="download" :size="size" />Download</o-button>
    <o-button type="primary" shape="round" icon="download" :size="size" />
    <o-button type="primary" icon="download" :size="size">
      Download
    </o-button>
    <br>
    <o-button-group :size="size">
      <o-button type="primary">
        <o-icon type="left" />Backward
      </o-button>
      <o-button type="primary">
        Forward<o-icon type="right" />
      </o-button>
    </o-button-group>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        size: 'large',
      };
    },
    methods: {
      handleSizeChange(e) {
        this.size = e.target.value;
      },
    },
  };
</script>
```
