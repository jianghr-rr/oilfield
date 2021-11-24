<template>
    <div class="wrapper">
        <o-form :form="form" v-bind="layout">
            <o-form-item label="公司名称">
                <o-input
                    v-decorator="[
                        'company',
                        {
                            rules: [
                                { required: true, message: '请输入公司名称' }
                            ]
                        }
                    ]"
                />
            </o-form-item>
            <o-form-item label="发票抬头">
                <o-input
                    v-decorator="[
                        'code',
                        {
                            rules: [
                                { required: true, message: '请输入发票抬头' }
                            ]
                        }
                    ]"
                />
            </o-form-item>
            <o-form-item label="开户银行">
                <o-input
                    v-decorator="[
                        'bank',
                        {
                            rules: [
                                { required: true, message: '请输入开户银行' }
                            ]
                        }
                    ]"
                />
            </o-form-item>
            <o-form-item label="银行账号">
                <o-input
                    v-decorator="[
                        'bankcode',
                        {
                            rules: [
                                { required: true, message: '请输入银行账号' }
                            ]
                        }
                    ]"
                />
            </o-form-item>
            <o-form-item label="电话号码">
                <o-input
                    v-decorator="[
                        'tel',
                        {
                            rules: [
                                { required: true, message: '请输入电话号码' }
                            ]
                        }
                    ]"
                />
            </o-form-item>
            <o-form-item label="单位地址">
                <o-input
                    v-decorator="[
                        'address',
                        {
                            rules: [
                                { required: true, message: '请输入单位地址' }
                            ]
                        }
                    ]"
                />
            </o-form-item>
        </o-form>
    </div>
</template>

<script>

const layout = {
    style: {
        width: '600px'
    }
};

export default {
    name: 'vertical',
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
                    console.log('--values--: ', values);
                }
            });
        }
    }
}
</script>

<style lang="less" scoped>
    @import "../index.less";
    .wrapper{
        display: flex;
        justify-content: center;
        .ant-form-item-label{
            top: -4px;
        }
    }
</style>