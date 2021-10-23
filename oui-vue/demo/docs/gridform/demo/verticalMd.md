<cn>
#### 垂直布局
最简单的一种布局方式。
</cn>

<us>
#### vertical
The simplest form of layout.
</us>

## 垂直布局

```vue
<template>
    <o-form :form="form" v-bind="layout">
       <o-form-item label="公司名称">
           <o-input
           		placeholder="请输入公司名称"
                v-decorator="[
                   'company',
                   {
                       rules: [
                           {required: true, message: '请输入公司名称'}
                       ]
                   }
                ]"
            />
       </o-form-item>
       <o-form-item label="发票抬头">
           <o-input
           		placeholder="请输入发票抬头"
                v-decorator="[
                   'code',
                   {
                       rules: [
                           {required: true, message: '请输入发票抬头'}
                       ]
                   }
               ]"
            />
       </o-form-item>
       <o-form-item label="开户银行">
           <o-input
           	    placeholder="请输入开户银行"
                v-decorator="[
                   'bank',
                   {
                       rules: [
                           {required: true, message: '请输入开户银行'}
                       ]
                   }
                ]"
            />
       </o-form-item>
       <o-form-item label="银行账号">
           <o-input
           		placeholder="请输入银行账号"
                v-decorator="[
                   'bankcode',
                   {
                       rules: [
                           {required: true, message: '请输入银行账号'}
                       ]
                   }
                ]"
            />
       </o-form-item>
       <o-form-item label="电话号码">
           <o-input
           		placeholder="请输入电话号码"
                v-decorator="[
                   'tel',
                   {
                       rules: [
                           {required: true, message: '请输入电话号码'}
                       ]
                   }
                ]"
            />
       </o-form-item>
       <o-form-item label="单位地址">
           <o-input
           		placeholder="请输入单位地址"
                v-decorator="[
                   'address',
                   {
                       rules: [
                           {required: true, message: '请输入单位地址'}
                       ]
                   }
                ]"
            />
       </o-form-item>
    </o-form>
	<o-button style="display: block;margin: 0 auto;" type="primary" @click="handleSubmit">提交</o-button>
</template>

<script>

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
export default {
    name: 'VerticalForm',
    data() {
        return {
            form: null,
            layout
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.form = this.$form.createForm(this, {name: 'oil_form'});
        });
    },
    methods: {
        handleSubmit() {
            this.form.validateFields((err, values) => {
                if (!err) {
                    this.$ommessage.info(`表单校验成功: ${JSON.stringify(values)}`);
                }
            });
        }
    }
}
</script>

```
