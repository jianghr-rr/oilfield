<cn>
#### 其他字符
可以将星星替换为其他字符，比如数字、字母、图标等。
</cn>

<us>
#### Other Character
Replace the default star to other character like alphabet, digit, iconfont or even Chinese word.
</us>

```vue
<template>
  <div>
    <o-rate allow-half :default-value="3.5">
      <o-icon slot="character" type="smile" />
    </o-rate>
  </div>
</template>
```
