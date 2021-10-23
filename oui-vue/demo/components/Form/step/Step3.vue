<template>
  <div style="max-width: 500px; margin: 40px auto 0; text-align: center">
    <result title="支付完成" :is-success="true" description="预计两小时内到账">
        <p>付款账户: ant-design@alipay.com</p>
        <p>收款账户: test@example.com</p>
        <p>收款人姓名: Alex</p>
        <p>转账金额: 500.00元</p>
    </result>
    <o-button type="primary" @click="doOnceAgin">再转一笔</o-button>
    <o-button style="margin-left: 8px">查看账单</o-button>
  </div>
</template>

<script>
import Result from './Result.vue'
export default {
  name: 'Step3',
  components: {Result},
  methods: {
    doOnceAgin () {
      this.$emit('finish')
    }
  }
}
</script>
