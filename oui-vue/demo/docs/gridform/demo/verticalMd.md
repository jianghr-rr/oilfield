<cn>
#### 垂直布局
使用 `<grid-form/>` 标签创建表单。可以通过不同的参数来快速配置不同的内容。
</cn>

<us>
#### vertical
Use tag `<grid-form/>` to create an login page. Different login events can be handled through different callback events themes.
</us>

## 垂直布局

```vue
<template>
    <div>
        <grid-form :form="form" :options="options" :span="100">
            <template v-for="{dataIndex} in options.items" :slot="dataIndex" slot-scope="{data}">
                <!-- or other control -->
                <o-input v-bind="data" v-decorator="data.decorator"></o-input>
            </template>
        </grid-form>
        <o-button type="primary" @click="handleSubmit">submit</o-button>
    </div>
</template>

<script>

import GridForm from '../../../components/GridForm/index.vue';

export default {
    name: 'VerticalForm',
    components: {
        GridForm
    },
    data() {
        return {
            form: null,
            options:{
                name: 'oilForm',
                items: [
                    {
                        dataIndex: 'company',
                        label: '公司名称',
                        control: {
                            decorator: [
                                'company',
                                {
                                    rules: [
                                        {required: true, message: '请输入公司名称'}
                                    ]
                                }
                            ],
                            maxLength: 20,
                            placeholder: '请输入公司名称'
                        }
                    },
                    {
                        dataIndex: 'Invoice',
                        label: '发票抬头',
                        control: {
                            decorator: [
                                'Invoice',
                                {
                                    rules: [
                                        {required: true, message: '请输入发票抬头'}
                                    ]
                                }
                            ],
                            maxLength: 20,
                            placeholder: '请输入发票抬头'
                        }
                    },
                    {
                        dataIndex: 'bank',
                        label: '开户银行',
                        control: {
                            decorator: [
                                'bank',
                                {
                                    rules: [
                                        {required: true, message: '请输入开户银行'}
                                    ]
                                }
                            ],
                            maxLength: 20,
                            placeholder: '请输入开户银行'
                        }
                    },
                    {
                        dataIndex: 'account',
                        label: '银行账号',
                        control: {
                            decorator: [
                                'account',
                                {
                                    rules: [
                                        {required: true, message: '请输入银行账号'}
                                    ]
                                }
                            ],
                            maxLength: 20,
                            placeholder: '请输入银行账号'
                        }
                    },
                    {
                        dataIndex: 'tel',
                        label: '电话号码',
                        control: {
                            decorator: [
                                'tel',
                                {
                                    rules: [
                                        {required: true, message: '请输入电话号码'}
                                    ]
                                }
                            ],
                            maxLength: 20,
                            placeholder: '请输入电话号码'
                        }
                    },
                    {
                        dataIndex: 'address',
                        label: '单位地址',
                        control: {
                            decorator: [
                                'address',
                                {
                                    rules: [
                                        {required: true, message: '请输入单位地址'}
                                    ]
                                }
                            ],
                            maxLength: 20,
                            placeholder: '请输入单位地址'
                        }
                    }
                ]
            }
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
