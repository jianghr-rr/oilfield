<cn>
  #### 更灵活的内容展示
  可以利用 `Card.Meta` 支持更灵活的内容
</cn>

<us>
  #### Customized content
  You can use `Card.Meta` to support more flexible content.
</us>

```vue
<template>
  <o-card hoverable style="width: 300px">
    <img
      slot="cover"
      alt="example"
      :src="logo"
    />
    <o-card-meta title="新疆油田实景拍照">
      <template slot="description">
        www.Xinjiang Userty Design.com
      </template>
    </o-card-meta>
  </o-card>
</template>

<script>
import logo from '../../../assets/image/img-1.png';
export default {
    data() {
        return {
            logo
        };
    },
};
</script>
```
