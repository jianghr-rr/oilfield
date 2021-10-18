<cn>
#### 左右栏布局
使用 `<grid-form/>` 标签创建表单。可以通过不同的参数来快速配置不同的内容。
</cn>

<us>
#### Basic
Use tag `<grid-form/>` to create an login page. Different login events can be handled through different callback events themes.
</us>

## 左右栏布局

```vue
<template>
    <div>
        <grid-form :form="form" :options="options" :span="45" :gap="5">
            <template slot="logo" slot-scope="{data}">
                <o-upload
                    v-decorator="data.decorator"
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
                            Upload
                        </div>
                    </div>
                </o-upload>
            </template>
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

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

export default {
    name: 'DtlFormPage',
    components: {
        GridForm
    },
    data() {
        return {
            form: null,
            loading: false,
            imageUrl: '',
            options:{
                name: 'oilForm',
                logo: {
                    dataIndex: 'logo',
                    label: '公司logo',
                    control: {
                        decorator: [
                            'logo',
                            {
                                rules: [
                                    {required: true, message: '请选择公司logo'}
                                ]
                            }
                        ]
                    }
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
                        span: 100,
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
</style>

```
