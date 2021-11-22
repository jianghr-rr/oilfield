<template>
  <div class="result">
    <div >
      <o-icon :class="[isSuccess ? 'success' : 'error' ,'icon']" :type="isSuccess ? 'check' : 'close'" :rotate="-15" />
    </div>
    <div class="title" v-if="title">{{title}}</div>
    <div class="desc" v-if="description">{{description}}</div>
    <div class="action">
      <slot name="action"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
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
      font-size: 120px;
      line-height: 120px;
      margin-bottom: 18px;
    }
    .success {
      color: @primary-color;
    }
    .error {
      color: @error-color;
    }
    .title{
      font-size: 26px;
      color: @title-color;
      font-family: Source Han Sans CN;
      font-weight: 400;
      line-height: 26px;
      margin-bottom: 52px;
    }
    .desc{
      font-size: 14px;
      line-height: 22px;
      color: @text-color-second;
      margin-bottom: 24px;
    }
    .action{
      margin-bottom: 50px;
    }
    .content{
      background-color: @shadow-shallow-color;
      padding: 30px;
      border-radius: 2px;
      text-align: left;
      box-shadow: 0px 0px 9px 1px @shadow-color;
      border-radius: 4px;
    }

  }

</style>
