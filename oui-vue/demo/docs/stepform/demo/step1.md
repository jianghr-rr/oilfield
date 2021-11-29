<cn>
#### Step1 步骤1
</cn>

<us>
#### Step1
</us>
## 用例

## Step1组件

```vue
<template>
    <o-form style="max-width: 700px; margin: 40px auto 0;" :form="form">
        <o-row>
            <o-col :span="8">
                <o-form-item label="公司Logo">
                    <o-upload
                        name="avatar"
                        list-type="picture-card"
                        class="avatar-uploader"
                        v-decorator="[
                            'logo',
                            {
                                rules: [
                                    {required: true, message: '请上传公司Lgogo'}
                                ]
                            }
                        ]"
                        :show-upload-list="false"
                        :action="action"
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
                </o-form-item>
            </o-col>
            <o-col :span="14">
                <o-form-item label="样品批号" :required="true">
                    <o-select
                        placeholder="请选择样品批号"
                        v-decorator="[
                            'batchCode',
                            {
                                rules: [
                                    {required: true, message: '请选择样品批号'}
                                ]
                            }
                        ]"
                    >
                        <o-select-option value="code_1">code_1</o-select-option>
                        <o-select-option value="code_2">code_2</o-select-option>
                        <o-select-option value="code_3">code_3</o-select-option>
                    </o-select>
                </o-form-item>
                <o-form-item label="地址">
                    <o-input
                        v-decorator="[
                            'address',
                            {
                                rules: [
                                    {required: true, message: '请输入地址'}
                                ]
                            }
                        ]"
                        placeholder="请输入地址"
                    />
                </o-form-item>
                <o-form-item label="项目名称">
                    <o-input
                        v-decorator="[
                            'projectName',
                            {
                                rules: [
                                    {required: true, message: '请输入项目名称'}
                                ]
                            }
                        ]"
                        placeholder="请输入项目名称"
                    />
                </o-form-item>
                <o-form-item label="交接人姓名">
                    <o-input
                        placeholder="请输入交接人姓名"
                        v-decorator="[
                            'orderName',
                            {
                                rules: [
                                    {required: true, message: '请输入交接人姓名'}
                                ]
                            }
                        ]"
                    />
                </o-form-item>
                <o-form-item label="交接日期">
                    <o-range-picker
                        format="YYYY-MM-DD"
                        v-decorator="[
                            'orderDate',
                            {
                                rules: [
                                    {required: true, message: '请选择交接日期'}
                                ]
                            }
                        ]"
                    />
                </o-form-item>
                <o-form-item label="可替换内容">
                    <o-textarea v-decorator="['replaceItem']" rows="4" placeholder="请输入可替换内容"/>
                </o-form-item>
            </o-col>
        </o-row>
        <o-form-item :wrapperCol="{span: 17, offset: 8}">
            <o-button style="margin-right: 8px"  @click="handleReset">重置</o-button>
            <o-button type="primary" @click="handleSubmit">下一步</o-button>
        </o-form-item>
    </o-form>
</template>

<script>

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

const action = window.location.href;

export default {
    name: 'Step1',
    data () {
        return {
            form: null,
            loading: false,
            imageUrl: '',
            action
        }
    },
    mounted() {
        this.$nextTick(async () => {
            this.form = await this.$form.createForm(this, {name: 'oil_form'});
            const registerList = ['logo', 'batchCode', 'address', 'projectName', 'orderName', 'orderDate', 'replaceItem'];
            registerList.forEach(id => {
                this.form.getFieldDecorator(id);
            });
            this.form.setFieldsInitialValue({
                logo: {
                    fileList: [
                        {
                            uid: 'xxxx',
                            name: 'logo.png',
                            status: 'done',
                            url: 'https://i.loli.net/2021/11/29/wf7IjBJcPCeQYRA.png'
                        }
                    ]
                },
                batchCode: 'code_1',
                address: '北京市 xxx区 xxx街道',
                projectName: '新疆油田xxx开发',
                orderName: '张三',
                replaceItem: "可替代的内容balabalabala"
            });
            this.imageUrl = 'https://i.loli.net/2021/11/29/wf7IjBJcPCeQYRA.png';
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
        handleReset() {
            this.form.resetFields();
        },
        handleSubmit() {
            this.form.validateFields((err, values) => {
                if (!err) {
                    this.$ommessage.info(`表单校验成功: ${JSON.stringify(values)}`);
                    this.$emit("update:values", values);
                    this.$emit('nextStep', values);
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
    img{
        width: 118px;
        height: 118px;
        object-fit: cover;
    }
</style>
```
