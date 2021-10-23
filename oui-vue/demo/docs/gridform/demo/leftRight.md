<cn>
#### 左右栏布局
左右并列布局。
</cn>

<us>
#### Left and right column layout
Left and right side-by-side layout.
</us>

## 左右栏布局

```vue
<template>
    <o-form :form="form">
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
            <o-col :span="16">
                <o-row :gutter="16">
                    <o-col :span="12">
                        <o-form-item label="详细地址">
                            <o-input
                            	placeholder="请输入详细地址"
                                v-decorator="[
                                    'address',
                                    {
                                        rules: [
                                            {required: true, message: '请输入详细地址'}
                                        ]
                                    }
                                ]"
                             />
                        </o-form-item>
    				</o-col>
                    <o-col :span="12">
                        <o-form-item label="电话">
                            <o-input
                                placeholder="请输入电话"
                                v-decorator="[
                                    'tel',
                                    {
                                        rules: [
                                            {required: true, message: '请输入电话'}
                                        ]
                                    }
                                ]"
                            />
                        </o-form-item>
    				</o-col>
    			</o-row>
                <o-row :gutter="16">
    				<o-col :span="12">
                        <o-form-item label="传真">
                            <o-input
                                placeholder="请输入传真"
                                v-decorator="[
                                    'fax',
                                    {
                                        rules: [
                                            {required: true, message: '请输入传真'}
                                        ]
                                    }
                                ]"
                            />
                        </o-form-item>
                    </o-col>
                    <o-col :span="12">
    					<o-form-item label="网址">
                            <o-input
                                placeholder="请输入网址"
                                v-decorator="[
                                    'website',
                                    {
                                        rules: [
                                            {required: true, message: '请输入网址'}
                                        ]
                                    }
                                ]"
                            />
                        </o-form-item>
    				</o-col>
    			</o-row>
                <o-form-item label="可替换内容">
                    <o-textarea rows="4" placeholder="请输入可替换内容"/>
                </o-form-item>
            </o-col>
        </o-row>
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
