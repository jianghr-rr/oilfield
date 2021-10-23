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
   <o-form :form="form" v-bind="layout">
        <o-row>
            <o-col :span="8">
                <o-form-item label="项目名称">
                    <o-input
                        :style="style.controlStyle"
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
                        :style="style.controlStyle"
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
                        :style="style.controlStyle"
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
                        :style="style.controlStyle"
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
                        :style="style.controlStyle"
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
                <div style="display: flex;justifyContent: flex-end;margin-top: 5px;">
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
    
const style = {
    controlStyle: {
        width: '80%'
    },
    btn: {
        marinRight: '20px'
    }
};

export default {
    name: 'OtherForm',
    data() {
        return {
            form: null,
            style,
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
