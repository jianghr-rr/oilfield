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
    <o-form :form="form">
        <o-row>
            <o-col :span="8">
                <o-form-item label="公司名称">
                    <o-input
                        :style="style.controlStyle"
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
    		</o-col>
            <o-col :span="8">
                <o-form-item label="行业类型">
                    <o-input
                        :style="style.controlStyle"
                        placeholder="请输入行业类型"
                        v-decorator="[
                            'industry',
                            {
                                rules: [
                                    {required: true, message: '请输入行业类型'}
                                ]
                            }
                        ]"
                    />
                </o-form-item>
    		</o-col>
            <o-col :span="8">
                <o-form-item label="所在区域">
                    <o-input
                        :style="style.controlStyle"
                        placeholder="请输入所在区域"
                        v-decorator="[
                            'area',
                            {
                                rules: [
                                    {required: true, message: '请输入所在区域'}
                                ]
                            }
                        ]"
                    />
                </o-form-item>
            </o-col>
    	</o-row>
        <o-row>
            <o-col :span="8">
    			<o-form-item label="邮编">
                    <o-input
                        :style="style.controlStyle"
                        placeholder="请输入邮编"
                        v-decorator="[
                            'email',
                            {
                                rules: [
                                    {required: true, message: '请输入邮编'}
                                ]
                            }
                        ]"
                    />
                </o-form-item>
    		</o-col>
            <o-col :span="8">
    			<o-form-item label="联系人">
                    <o-input
                        :style="style.controlStyle"
                        placeholder="请输入联系人"
                        v-decorator="[
                            'connector',
                            {
                                rules: [
                                    {required: true, message: '请输入联系人'}
                                ]
                            }
                        ]"
                    />
                </o-form-item>
    		</o-col>
            <o-col :span="8">
    			<o-form-item label="职位">
                    <o-input
                        :style="style.controlStyle"
                        placeholder="请输入职位"
                        v-decorator="[
                            'position',
                            {
                                rules: [
                                    {required: true, message: '请输入职位'}
                                ]
                            }
                        ]"
                    />
                </o-form-item>
    		</o-col>
    	</o-row>
        <o-row>
            <o-col :span="8">
    			<o-form-item label="联系人">
                    <o-input
                        :style="style.controlStyle"
                        placeholder="请输入联系人"
                        v-decorator="[
                            'connector2',
                            {
                                rules: [
                                    {required: true, message: '请输入联系人'}
                                ]
                            }
                        ]"
                    />
                </o-form-item>
    		</o-col>
            <o-col :span="8">
    			<o-form-item label="手机号码">
                    <o-input
                        :style="style.controlStyle"
                        placeholder="请输入手机号码"
                        v-decorator="[
                            'tel',
                            {
                                rules: [
                                    {required: true, message: '请输入手机号码'}
                                ]
                            }
                        ]"
                    />
                </o-form-item>
    		</o-col>
            <o-col :span="8">
    			<o-form-item label="QQ">
                    <o-input
                        :style="style.controlStyle"
                        placeholder="请输入QQ"
                        v-decorator="[
                            'qq',
                            {
                                rules: [
                                    {required: true, message: '请输入QQ'}
                                ]
                            }
                        ]"
                    />
                </o-form-item>
    		</o-col>
    	</o-row>
    </o-form>
    <o-button type="primary" @click="handleSubmit">提交</o-button>
</template>

<script>
const style = {
    controlStyle: {
        width: '80%'
    }
};
export default {
    name: 'HorizontalForm',
    data() {
        return {
            form: null,
            style
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

<style scoped>
</style>

```
