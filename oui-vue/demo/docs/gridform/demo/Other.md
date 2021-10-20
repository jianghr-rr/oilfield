<cn>
#### 其他自定义布局
可以在`options`中单独设置`dataIndex`来实现占位效果;
`span`属性既可以在`<grid-form />`中统一配置，也可以在`options`中单独配置。
</cn>

<us>
#### Other
The `span` attribute can be configured either uniformly in `< grid-form / >` or separately in `options` to achieve other configuration effects.
</us>

## 其他自定义布局

```vue
<template>
    <div>
        <grid-form :form="form" :options="options" :span="30" :gap="5">
            <template v-for="{dataIndex} in options.items" :slot="dataIndex" slot-scope="{data = {}}">
                <!-- or other control -->
                <div v-if="dataIndex === 'optionsArea'" class="option-area">
                    <o-button size="large" @click="handleReset">重置</o-button>
                    <o-button size="large" type="primary" @click="handleSubmit">提交</o-button>
                </div>
                <o-input v-else size="large" v-bind="data" v-decorator="data.decorator"></o-input>
            </template>
        </grid-form>
    </div>
</template>

<script>

import GridForm from '../../../components/GridForm/index.vue';

export default {
    name: 'OtherForm',
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
                        dataIndex: 'projectName',
                        label: '项目名称',
                        control: {
                            decorator: [
                                'projectName',
                                {
                                    rules: [
                                        {required: true, message: '请输入项目名称'}
                                    ]
                                }
                            ],
                            maxLength: 20,
                            placeholder: '请输入项目名称'
                        }
                    },
                    {
                        dataIndex: 'desc',
                        label: '描述',
                        control: {
                            decorator: [
                                'desc',
                                {
                                    rules: [
                                        {required: true, message: '请输入描述'}
                                    ]
                                }
                            ],
                            maxLength: 20,
                            placeholder: '请输入描述'
                        }
                    },
                    {
                        dataIndex: 'handover',
                        label: '交接人',
                        control: {
                            decorator: [
                                'handover',
                                {
                                    rules: [
                                        {required: true, message: '请输入交接人'}
                                    ]
                                }
                            ],
                            maxLength: 20,
                            placeholder: '请输入交接人'
                        }
                    },
                    {
                        dataIndex: 'status',
                        label: '状态',
                        control: {
                            decorator: [
                                'status',
                                {
                                    rules: [
                                        {required: true, message: '请输入状态'}
                                    ]
                                }
                            ],
                            maxLength: 20,
                            placeholder: '请输入状态'
                        }
                    },
                    {
                        dataIndex: 'date',
                        label: '交接日期',
                        control: {
                            decorator: [
                                'date',
                                {
                                    rules: [
                                        {required: true, message: '请输入交接日期'}
                                    ]
                                }
                            ],
                            maxLength: 20,
                            placeholder: '请输入交接日期'
                        }
                    },
                    {
                        dataIndex: 'optionsArea'
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
        handleReset() {
            this.form.resetFields();
        },
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

<style>
    .option-area{
        position: relative;
        top: 40px;
        float: right;
    }
    button {
        margin-left: 10px;
    }
</style>
```
