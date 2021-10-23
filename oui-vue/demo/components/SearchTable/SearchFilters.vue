<template>
   <o-form :form="form" v-bind="layout">
        <o-row>
            <o-col :span="8">
                <o-form-item label="项目名称">
                    <o-input v-decorator="['projectName']" placeholder="请输入项目名称" />
                </o-form-item>
    		</o-col>
            <o-col :span="8">
                <o-form-item label="描述">
                    <o-input v-decorator="['desc']" placeholder="请输入描述" />
                </o-form-item>
    		</o-col>
            <o-col :span="8">
                <o-form-item label="交接人">
                    <o-input v-decorator="['orderer']" placeholder="请输入交接人" />
                </o-form-item>
            </o-col>
    	</o-row>
        <o-row>
            <o-col :span="8">
    			<o-form-item label="状态">
                    <o-input v-decorator="['status']" placeholder="请输入状态" />
                </o-form-item>
    		</o-col>
            <o-col :span="8">
    			<o-form-item label="交接日期">
                    <o-range-picker v-decorator="['orderDate']"/>
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
            this.form = this.$form.createForm(this, {name: 'oil_form'});
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

<style scoped>
</style>
