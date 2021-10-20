<cn>
#### 水平布局
从堆叠到水平排列。
使用单`span`、`gap`属性，就可以创建一个基本的栅格系统。
</cn>

<us>
#### horizontal
Using a single `span` and `gap` attributes, you can create a basic grid system.
</us>

## 水平布局

```vue
<template>
    <div>
        <grid-form :form="form" :options="options" :span="30" :gap="5">
            <template v-for="{dataIndex} in options.items" :slot="dataIndex" slot-scope="{data}">
                <!-- or other control -->
                <o-input size="large" v-bind="data" v-decorator="data.decorator"></o-input>
            </template>
        </grid-form>
        <o-button type="primary" @click="handleSubmit">submit</o-button>
    </div>
</template>

<script>

import GridForm from '../../../components/GridForm/index.vue';

export default {
    name: 'HorizontalForm',
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
                        dataIndex: 'industry',
                        label: '行业类型',
                        control: {
                            decorator: [
                                'industry'
                            ],
                            maxLength: 20,
                            placeholder: '请输入行业类型'
                        }
                    },
                    {
                        dataIndex: 'area',
                        label: '所在区域',
                        control: {
                            decorator: [
                                'area'
                            ],
                            maxLength: 20,
                            placeholder: '请输入公司名称'
                        }
                    },
                    {
                        dataIndex: 'message',
                        label: '邮编',
                        control: {
                            decorator: [
                                'message'
                            ],
                            maxLength: 20,
                            placeholder: '请输入邮编'
                        }
                    },
                    {
                        dataIndex: 'connector',
                        label: '联系人',
                        control: {
                            decorator: [
                                'connector'
                            ],
                            maxLength: 20,
                            placeholder: '请输入联系人'
                        }
                    },
                    {
                        dataIndex: 'position',
                        label: '职位',
                        control: {
                            decorator: [
                                'position'
                            ],
                            maxLength: 20,
                            placeholder: '请输入职位'
                        }
                    },
                    {
                        dataIndex: 'connector2',
                        label: '联系人',
                        control: {
                            decorator: [
                                'connector2'
                            ],
                            maxLength: 20,
                            placeholder: '请输入联系人'
                        }
                    },
                    {
                        dataIndex: 'phone',
                        label: '手机号码',
                        control: {
                            decorator: [
                                'phone'
                            ],
                            maxLength: 20,
                            placeholder: '请输入手机号码'
                        }
                    },
                    {
                        dataIndex: 'qq',
                        label: 'QQ',
                        control: {
                            decorator: [
                                'qq'
                            ],
                            maxLength: 20,
                            placeholder: '请输入QQ'
                        }
                    }
                ]
            }
        }
    },
    computed: {
        color() {
            return this.$store.getters.color;
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.form = this.$form.createForm(this, {name: 'oil_form', onValuesChange: (props, values) => console.log('values: ', values)});
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

<style lang="less" scoped>
    .view-item{
        margin-bottom: 20px;
        box-sizing: border-box;
        padding: 20px;
        box-shadow:  0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
</style>

```
