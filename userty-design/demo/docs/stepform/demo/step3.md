<cn>
#### Step3 步骤3
</cn>

<us>
#### Step3
</us>
## 用例

## Step3组件

```vue
<template>
  <div style="max-width: 500px; margin: 40px auto 0; text-align: center">
    <o-result title="交接完成" :isSuccess="true">
        <p>样品批号: {{values.batchCode}}</p>
        <p>地址: {{values.address}}</p>
        <p>项目名称: {{values.projectName}}</p>
        <p>交接人姓名: {{values.orderName}}</p>
        <p>交接日期: {{(values.orderDate || []).join('~')}}</p>
    </o-result>
    <o-button type="primary" @click="doOnceAgin">二次交接</o-button>
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
                return {
                    batchCode: 'code_1',
                    address: '北京市 xxx区 xxx街道',
                    projectName: '新疆油田xxx开发',
                    orderName: '张三',
                    replaceItem: "可替代的内容balabalabala",
                    orderDate: ['2020-12-12', '2021-01-31']
                };
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

```
