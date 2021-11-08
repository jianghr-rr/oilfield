<template>
  <div style="max-width: 500px; margin: 40px auto 0; text-align: center">
    <result title="交接完成" :is-success="true">
        <p>样品批号: {{values.batchCode}}</p>
        <p>地址: {{values.address}}</p>
        <p>项目名称: {{values.projectName}}</p>
        <p>交接人姓名: {{values.orderName}}</p>
        <p>交接日期: {{(values.orderDate || []).join('~')}}</p>
    </result>
    <o-button type="primary" @click="doOnceAgin">二次交接</o-button>
    <o-button style="margin-left: 8px">查看信息</o-button>
  </div>
</template>

<script>
import Result from '@/components/result/Result'
export default {
  name: 'Step3',
  components: {Result},
  props: {
      values: {
          type: Object,
          default: () => {
              return {};
          }
      }
  },
  methods: {
    doOnceAgin () {
      this.$emit('finish')
    }
  }
}
</script>
