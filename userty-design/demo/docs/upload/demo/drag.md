<cn>
#### 拖拽上传
把文件拖入指定区域，完成上传，同样支持点击上传。
设置 `multiple` 后，在 `IE10+` 可以一次上传多个文件。
</cn>

<us>
#### Drag and Drop
Classic mode. File selection dialog pops up when upload button is clicked.
</us>

```vue
<template>
  <o-upload-dragger
    name="file"
    :multiple="true"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    @change="handleChange"
  >
    <p class="ant-upload-drag-icon">
      <o-icon type="inbox" />
    </p>
    <p class="ant-upload-text">
      点击或拖拽文件到此区域上传
    </p>
    <p class="ant-upload-hint">
      支持单次或批次上传，禁止上传公司保密文件
    </p>
  </o-upload-dragger>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleChange(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
  },
};
</script>
```
