<cn>
#### Result 步骤三-结果展示
</cn>

<us>
#### Result
</us>
## 用例

## Step3组件

```vue
<template>
  <div class="result">
    <div >
      <o-icon :class="[isSuccess ? 'success' : 'error' ,'icon']" :type="isSuccess ? 'check-circle' : 'close-circle'" />
    </div>
    <div class="title" v-if="title">{{title}}</div>
    <div class="desc" v-if="description">{{description}}</div>
    <div class="content">
      <slot></slot>
    </div>
    <div class="action">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Result',
  props: ['isSuccess', 'title', 'description']
}
</script>

<style lang="less" scoped>
  .result{
    text-align: center;
    width: 72%;
    margin: 0 auto;
    .icon{
      font-size: 72px;
      line-height: 72px;
      margin-bottom: 24px;
    }
    .success {
      color: rgb(62, 175, 124);
    }
    .error {
      color: rgb(245, 34, 45);
    }
    .title{
      font-size: 24px;
      font-weight: 500;
      line-height: 32px;
      margin-bottom: 16px;
    }
    .desc{
      font-size: 14px;
      line-height: 22px;
      margin-bottom: 24px;
    }
    .content{
      background-color: #eee;
      padding: 24px 40px;
      border-radius: 2px;
      text-align: left;
    }
    .action{
      margin-top: 32px;
    }
  }

</style>

```
