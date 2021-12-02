<template>
    <o-form :form="form" v-bind="layout">
        <o-row :gutter="70">
            <o-col :span="8">
                <o-form-item label="项目名称">
                    <o-input v-decorator="['projectName']" />
                </o-form-item>
            </o-col>
            <o-col :span="8">
                <o-form-item>
                    <span class="label" slot="label">
                        <span>描</span><span>述</span>
                    </span>
                    <o-input v-decorator="['desc']" />
                </o-form-item>
            </o-col>
            <o-col :span="8">
                <o-form-item label="交接人">
                    <o-input v-decorator="['orderer']" />
                </o-form-item>
            </o-col>
        </o-row>
        <o-row :gutter="70">
            <o-col :span="8">
                <o-form-item>
                    <span class="label" slot="label">
                        <span>状</span><span>态</span>
                    </span>
                    <o-input v-decorator="['status']" />
                </o-form-item>
            </o-col>
            <o-col :span="8">
                <o-form-item label="交接日期">
                    <o-input v-decorator="['orderDate']" />
                </o-form-item>
            </o-col>
            <o-col :span="8">
                <div style="display: flex;justifyContent: flex-end;margin: 5px;">
                    <o-button :loading="loading" style="margin-right: 15px;" @click="handleReset">重置</o-button>
                    <o-button :loading="loading" type="primary" @click="handleSearch">查询</o-button>
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
    name: 'Filters',
    props: {
        loading: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            form: null,
            layout
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
            this.$emit('onSearch', {});
        },
        handleSearch() {
            const values = this.form.getFieldsValue();
            this.$emit('onSearch', values);
        }
    }
}
</script>

<style lang="less" scoped>
    input {
        &.ant-input{
            height: 40px;
        }
    }
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
