<cn>
#### 其他自定义布局
</cn>

<us>
#### Other
</us>

## 其他自定义布局

```vue
<template>
   <o-form :form="form" v-bind="layout">
        <o-row>
            <o-col :span="8">
                <o-form-item label="项目名称">
                    <o-input
                    	placeholder="请输入项目名称"
                        v-decorator="[
                            'projectName',
                            {
                                rules: [
                                    {required: true, message: '请输入项目名称'}
                                ]
                            }
                        ]"
                     />
                </o-form-item>
    		</o-col>
            <o-col :span="8">
                <o-form-item label="描述">
                    <o-input
                        placeholder="请输入描述"
                        v-decorator="[
                            'desc',
                            {
                                rules: [
                                    {required: true, message: '请输入描述'}
                                ]
                            }
                        ]"
                    />
                </o-form-item>
    		</o-col>
            <o-col :span="8">
                <o-form-item label="交接人">
                    <o-input
                        placeholder="请输入交接人"
                        v-decorator="[
                            'handover',
                            {
                                rules: [
                                    {required: true, message: '请输入交接人'}
                                ]
                            }
                        ]"
                    />
                </o-form-item>
            </o-col>
    	</o-row>
        <o-row>
            <o-col :span="8">
    			<o-form-item label="状态">
                    <o-input
                        placeholder="请输入状态"
                        v-decorator="[
                            'status',
                            {
                                rules: [
                                    {required: true, message: '请输入状态'}
                                ]
                            }
                        ]"
                    />
                </o-form-item>
    		</o-col>
            <o-col :span="8">
    			<o-form-item label="交接日期">
                    <o-input
                        placeholder="请输入交接日期"
                        v-decorator="[
                            'connectDate',
                            {
                                rules: [
                                    {required: true, message: '请输入交接日期'}
                                ]
                            }
                        ]"
                    />
                </o-form-item>
    		</o-col>
            <o-col :span="8">
                <div style="display: flex;justifyContent: flex-end;margin: 5px;">
                    <o-button style="margin-right: 15px;" @click="handleReset">重置</o-button>
                    <o-button type="primary" @click="handleSubmit">提交</o-button>
                </div>
    		</o-col>
    	</o-row>
    </o-form>
</template>

<script>
    
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

export default {
    name: 'OtherForm',
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

<style scoped>
</style>
```
