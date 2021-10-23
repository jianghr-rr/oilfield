<cn>
#### Step2 步骤2
</cn>

<us>
#### Step2
</us>
## 用例

## Step2组件

```vue
<template>
    <div>
        <o-form style="max-width: 500px; margin: 40px auto 0;" v-bind="layout">
            <o-alert
                :closable="true"
                message="确认交接内容后，将无法退回。"
                style="margin-bottom: 24px;"
            />
            <o-form-item label="样品批号">
                {{values.batchCode}}
            </o-form-item>
            <o-form-item label="地址">
                {{values.address}}
            </o-form-item>
            <o-form-item label="项目名称">
                {{values.projectName}}
            </o-form-item>
            <o-form-item label="交接人姓名">
                {{values.orderName}}
            </o-form-item>
            <o-form-item label="交接日期">
                {{(values.orderDate || []).join('~')}}
            </o-form-item>
            <o-form-item :wrapperCol="{span: 17, offset: 7}">
                <o-button style="margin-right: 8px" @click="prevStep">上一步</o-button>
                <o-button :loading="loading" type="primary" @click="nextStep">下一步</o-button>
            </o-form-item>
        </o-form>
    </div>
</template>

<script>
const layout = {
    labelCol: {span: 7},
    wrapperCol: {span: 17}
};

export default {
    name: 'Step2',
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
    data () {
        return {
            loading: false,
            layout
        }
    },
    methods: {
        nextStep () {
            let _this = this
            _this.loading = true
            setTimeout(function () {
              _this.$emit('nextStep')
            }, 1500)
        },
        prevStep () {
            this.$emit('prevStep')
        }
    }
}
</script>

<style lang="less" scoped>
  .stepFormText {
    margin-bottom: 24px;
    :global {
      .ant-form-item-label,
      .ant-form-item-control {
        line-height: 22px;
      }
    }
  }
</style>

```
