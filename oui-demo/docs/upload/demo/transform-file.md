<cn>
#### 上传前转换文件
使用 `transformFile` 转换上传的文件（例如添加水印）。
</cn>

<us>
#### Transform file before request
Use `transformFile` for transform file before request such as add a watermark.
</us>

```vue
<template>
  <div>
    <o-upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      :transform-file="transformFile"
    >
      <o-button> <o-icon type="upload" /> Upload </o-button>
    </o-upload>
  </div>
</template>
<script>
export default {
  methods: {
    transformFile(file) {
      return new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const canvas = document.createElement('canvas');
          const img = document.createElement('img');
          img.src = reader.result;
          img.onload = () => {
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            ctx.fillStyle = 'red';
            ctx.textBaseline = 'middle';
            ctx.fillText('Ant Design', 20, 20);
            canvas.toBlob(resolve);
          };
        };
      });
    },
  },
};
</script>
```
