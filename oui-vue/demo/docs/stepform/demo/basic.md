<cn>
#### 用法
步骤条 + 自定义内容。
</cn>

<us>
#### Useage
Step bar + custom content.
</us>

## 用例

```vue
<template>
    <step-form :steps="steps" :current="current">
        <!-- step1 -->
        <template slot="step1">
            <grid-form :form="form" :options="options" style="width: 800px; margin: 0 auto;">
                <template slot="left" slot-scope="{data}">
                    <o-upload
                        name="avatar"
                        list-type="picture-card"
                        class="avatar-uploader"
                        :show-upload-list="false"
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        :before-upload="beforeUpload"
                        @change="handleChange"
                    >
                        <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
                        <div v-else>
                            <o-icon :type="loading ? 'loading' : 'plus'" />
                            <div class="ant-upload-text">
                                上传图片
                            </div>
                        </div>
                    </o-upload>
                </template>
                <template v-for="{dataIndex} in options.items" :slot="dataIndex" slot-scope="{data}">
                    <o-input size="large" v-bind="data" v-decorator="data.decorator"></o-input>
                </template>
            </grid-form>
        </template>
        <!-- step2 -->
        <template slot="step2">
            <o-table :columns="columns" :data-source="data" :row-selection="{onChange, onSelect, onSelectAll}">
                <a slot="operate" slot-scope="scoped" :style="{color, padding: '5px 10px', border: `1px solid ${color}`, borderRadius: '5px'}">
                    二次交接
                </a>
            </o-table>
        </template>
        <!-- step3 -->
        <template slot="step3">
            <div class="oil-step-success">
                <div class="logo">
                    <o-icon type="check" :style="{fontSize: '90px', color, transform: 'rotate(-15deg)'}" />
                </div>
                <div class="title">操作成功</div>
                <div class="btns">
                    <o-button type="primary">完成交接</o-button>
                    <o-button>查看信息</o-button>
                </div>
                <div class="card">
                    <div class="card-fix" :style="{backgroundColor: color}">研</div>
                    <div class="card-item" v-for="item in result" :key="item.title">
                        <label>{{item.title}}</label>
                        <span>{{item.value}}</span>
                    </div>
                </div>
            </div>
        </template>
        <!-- footer buttons -->
        <template slot="footer">
            <o-button v-if="current > 0" @click="current--" style="margin-right: 40px;">上一步</o-button>
            <o-button v-if="current < steps.length - 1" type="primary" @click="handleNext">下一步</o-button>
        </template>
    </step-form>
</template>

<script>
    import StepForm from '../../../components/StepForm/index.vue';
    import GridForm from '../../../components/GridForm/index.vue';

    function getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    /**
     * step first options
    */
    const stepFirstMixins = {
        data() {
            return {
                form: null,
                loading: false,
                imageUrl: '',
                options:{
                    name: 'oilForm',
                    left: {
                        dataIndex: 'logo',
                        label: '公司logo'
                    },
                    items: [
                        {
                            dataIndex: 'address',
                            label: '详细地址',
                            control: {
                                decorator: [
                                    'address',
                                    {
                                        rules: [
                                            {required: true, message: '请输入详细地址'}
                                        ]
                                    }
                                ],
                                maxLength: 20,
                                placeholder: '请输入详细地址'
                            }
                        },
                        {
                            dataIndex: 'tel',
                            label: '电话',
                            control: {
                                decorator: [
                                    'tel'
                                ],
                                maxLength: 20,
                                placeholder: '请输入电话'
                            }
                        },
                        {
                            dataIndex: 'fax',
                            label: '传真',
                            control: {
                                decorator: [
                                    'fax'
                                ],
                                maxLength: 20,
                                placeholder: '请输入传真'
                            }
                        },
                        {
                            dataIndex: 'url',
                            label: '网址',
                            control: {
                                decorator: [
                                    'url'
                                ],
                                maxLength: 20,
                                placeholder: '请输入网址'
                            }
                        },
                        {
                            dataIndex: 'introduce',
                            label: '公司介绍',
                            control: {
                                decorator: [
                                    'introduce'
                                ],
                                type: 'textarea',
                                maxLength: 20,
                                placeholder: '请输入公司介绍'
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
            handleChange(info) {
                if (info.file.status === 'uploading') {
                    this.loading = true;
                    return;
                }
                if (info.file.status === 'done') {
                    // Get this url from response in real world.
                    getBase64(info.file.originFileObj, imageUrl => {
                        this.imageUrl = imageUrl;
                        this.loading = false;
                    });
                }
            },
            beforeUpload(file) {
                const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
                if (!isJpgOrPng) {
                    this.$message.error('You can only upload JPG file!');
                }
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isLt2M) {
                    this.$message.error('Image must smaller than 2MB!');
                }
                return isJpgOrPng && isLt2M;
            },
            onSubmit() {
                return new Promise(resolve => {
                    this.form.validateFields((err, values) => {
                        if (!err) {
                            this.$ommessage.info(`表单校验成功: ${JSON.stringify(values)}`);
                            resolve();
                        }
                    });
                });
            }
        }
    };

    /**
     * step second options
    */
    const stepSecondMixins = {
        data() {
            return {
                columns: [
                     {
                        title: '样品批号',
                        dataIndex: 'batchNo',
                        key: 'batchNo'
                    },
                    {
                        title: '描述',
                        dataIndex: 'desc',
                        key: 'desc'
                    },
                    {
                        title: '项目名称',
                        dataIndex: 'projectName',
                        key: 'projectName'
                    },
                    {
                        title: '状态',
                        dataIndex: 'status',
                        key: 'status'
                    },
                    {
                        title: '日期',
                        dataIndex: 'datetime',
                        key: 'datetime'
                    },
                    {
                        title: '操作',
                        dataIndex: 'operate',
                        key: 'operate',
                        scopedSlots: {customRender: 'operate'}
                    }
                ],
                data: new Array(30).fill('').map((_item, index) => ({
                    key: index,
                    batchNo: `【样品批号】2020-${index}`,
                    desc: '这是一段描述',
                    projectName: '沉积岩粘土矿物X衍射分析',
                    status: '二次交接',
                    datetime: '2021-08-25 10:49:28'
                }))
            }
        },
        methods: {
            onChange(selectedRowKeys, selectedRows) {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            onSelect(record, selected, selectedRows) {
                console.log(record, selected, selectedRows);
            },
            onSelectAll(selected, selectedRows, changeRows) {
                console.log(selected, selectedRows, changeRows);
            }
        }
    };

    /**
     * final step options
    */
    const stepFinalMixins = {
        data() {
            return {
                result: [
                    {
                        title: '样品批号',
                        value: '020-1111'
                    },
                    {
                        title: '地址',
                        value: 'xxxx研究院'
                    },
                    {
                        title: '项目名称',
                        value: '沉积岩粘土矿物X衍射分析'
                    },
                    {
                        title: '状态',
                        value: '一次交接完成'
                    },
                    {
                        title: '交接日期',
                        value: '2021-08-25 10:49:28'
                    },
                    {
                        title: '交接人',
                        value: '李四'
                    }
                ]
            }
        }
    };

    export default {
        name: 'Test',
        components: {
            StepForm,
            GridForm
        },
        mixins: [
            stepFirstMixins,
            stepSecondMixins,
            stepFinalMixins
        ],
        data() {
            return {
                current: 0,
                steps: [
                    {
                        name: 'step1',
                        title: '样品交接'
                    },
                    {
                        name: 'step2',
                        title: '二次交接'
                    },
                    {
                        name: 'step3',
                        title: '完成'
                    }
                ]
            }
        },
        computed: {
            color() {
                return this.$store.getters.color;
            }
        },
        methods: {
            async handleNext() {
                if (this.current === 0) {
                    await this.onSubmit();
                    this.current++;
                }
                else {
                    this.current++;
                }
            }
        }
    }
</script>

<style scoped>
    .avatar-uploader > .ant-upload {
        width: 128px;
        height: 128px;
    }
    .ant-upload-select-picture-card i {
        font-size: 32px;
        color: #999;
    }

    .ant-upload-select-picture-card .ant-upload-text {
        margin-top: 8px;
        color: #666;
    }

    .oil-step-success{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .oil-step-success > .title {
        font-family: 'SourceHanSansCN-Normal', 'Source Han Sans CN Normal', 'Source Han Sans CN', sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 26px;
        letter-spacing: 0.5px;
        text-align: center;
        margin: 20px 0 30px;
    }
    .oil-step-success > .btns > button{
        margin: 0 20px;
        margin-bottom: 30px;
    }
    .oil-step-success > .card {
        width: 363px;
        min-height: 242px;
        background-color: rgba(242, 242, 242, 1);
        box-sizing: border-box;
        padding: 20px 20px 20px 100px;
        position: relative;
    }
    .oil-step-success .card-fix{
        position: absolute;
        left: 30px;
        top: 40px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        font-family: 'SourceHanSansCN-Normal', 'Source Han Sans CN Normal', 'Source Han Sans CN', sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 20px;
        color: #FFFFFF;
        text-align: center;
        line-height: 32px;
    }
    .oil-step-success .card-item{
        font-family: 'SourceHanSansCN-Normal', 'Source Han Sans CN Normal', 'Source Han Sans CN', sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 12px;
        margin: 20px 0;
    }
    .oil-step-success .card-item > label::after{
        content: ":";
    }
</style>

```
