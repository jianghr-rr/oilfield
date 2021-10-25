<template>
  <div style="max-width: 500px; margin: 40px auto 0; text-align: center">
    <o-result title="交接完成" :is-success="true" description="将在指定时间内交接完毕">
        <p>样品批号: {{values.batchCode}}</p>
        <p>地址: {{values.address}}</p>
        <p>项目名称: {{values.projectName}}</p>
        <p>交接人姓名: {{values.orderName}}</p>
        <p>交接日期: {{(values.orderDate || []).join('~')}}</p>
    </o-result>
    <o-button type="primary" @click="doOnceAgin">再处理一笔</o-button>
    <o-button style="margin-left: 8px">查看信息</o-button>
  </div>
</template>

<script>
export default {
  name: 'Step3',
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
