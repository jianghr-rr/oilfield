<template>
    <o-form :form="form" v-bind="layout">
        <o-row>
            <o-col :span="8">
                <o-form-item label="项目名称">
                    <o-input
                        v-decorator="[
                            'projectName',
                            {
                                rules: [
                                    { required: true, message: '请输入项目名称' }
                                ]
                            }
                        ]"
                    />
                </o-form-item>
            </o-col>
            <o-col :span="8">
                <o-form-item>
                    <span class="label" slot="label">
                        <span>描</span><span>述</span>
                    </span>
                    <o-input
                        v-decorator="[
                            'desc',
                            {
                                rules: [
                                    { required: true, message: '请输入描述' }
                                ]
                            }
                        ]"
                    />
                </o-form-item>
            </o-col>
            <o-col :span="8">
                <o-form-item label="交接人">
                    <o-input
                        v-decorator="[
                            'handover',
                            {
                                rules: [
                                    { required: true, message: '请输入交接人' }
                                ]
                            }
                        ]"
                    />
                </o-form-item>
            </o-col>
        </o-row>
        <o-row>
            <o-col :span="8">
                <o-form-item>
                    <span class="label" slot="label">
                        <span>状</span><span>态</span>
                    </span>
                    <o-input
                        v-decorator="[
                            'status',
                            {
                                rules: [
                                    { required: true, message: '请输入状态' }
                                ]
                            }
                        ]"
                    />
                </o-form-item>
            </o-col>
            <o-col :span="8">
                <o-form-item label="交接日期">
                    <o-input
                        v-decorator="[
                            'connectDate',
                            {
                                rules: [
                                    { required: true, message: '请输入交接日期' }
                                ]
                            }
                        ]"
                    />
                </o-form-item>
            </o-col>
            <o-col :span="8">
                <div style="display: flex;justifyContent: flex-end;margin: 5px;">
                    <o-button style="margin-right: 15px;" @click="handleReset">重置</o-button>
                    <o-button type="primary">查询</o-button>
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
    name: 'other',
    props: {
        resetKey: String || null,
        submitKey: String || null
    },
    data() {
        return {
            form: null,
            layout
        }
    },
    watch: {
        resetKey() {
            this.handleReset();
        },
        submitKey() {
            this.handleSubmit();
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.form = this.$form.createForm(this, { name: 'oil_form' });
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

<style lang="less" scoped>
    @import "../index.less";
    .label{
        span{
            display: inline-block;
            margin-left: 28px;
            &:nth-child(1){
                margin: 0;
            }
        }
    }
</style>