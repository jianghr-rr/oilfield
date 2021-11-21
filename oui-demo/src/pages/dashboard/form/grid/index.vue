<template>
    <div>
        <p>
            XinJiang Userty Design Pro Pro为新疆油田相关系统产品的界面设计、用户体验问题给予的设计方案。
            XinJiang Userty Design Pro Pro为新疆油田相关系统产品的界面设计、用户体验问题给予的设计方案。
        </p>
        <o-form :form="form" v-bind="layout">
            <o-card class="card" :bordered="false">
                <div class="title">水平布局</div>
                <horizontal-form :resetKey="resetKey" :submitKey="submitKey"></horizontal-form>
            </o-card>
            <o-card class="card" :bordered="false">
                <div class="title">详细信息</div>
                <between-form :resetKey="resetKey" :submitKey="submitKey"></between-form>
            </o-card>
            <o-card class="card" :bordered="false">
                <div class="title">财务信息</div>
                <vertical-form :resetKey="resetKey" :submitKey="submitKey"></vertical-form>
            </o-card>
            <o-card class="card" :bordered="false">
                <other-form :resetKey="resetKey" :submitKey="submitKey"></other-form>
            </o-card>
        </o-form>
        <div class="footer">
            <o-button type="primary" @click="handleSubmit">提交</o-button>
            <o-button @click="handleReset">重置</o-button>
        </div>
    </div>
</template>

<script>
import HorizontalForm from "./components/horizontal.vue";
import VerticalForm from "./components/vertical.vue";
import BetweenForm from "./components/between.vue";
import OtherForm from "./components/other.vue";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
export default {
    name: 'grid',
    components: {
        HorizontalForm,
        VerticalForm,
        BetweenForm,
        OtherForm
    },
    data() {
        return {
            form: null,
            layout,
            resetKey: null,
            submitKey: null
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.form = this.$form.createForm(this, { name: 'oil_form' });
        });
    },
    methods: {
        handleReset() {
           this.resetKey = `${+new Date()}`;
        },
        handleSubmit() {
            this.submitKey = `${+new Date()}`;
        }
    }
}
</script>

<style lang="less" scoped>
    @import './index.less';
    .title {
        font-size: 18px;
        line-height: 18px;
        font-family: 'SourceHanSansCN-Medium';
        font-weight: 500;
        color: @primary-color;
        line-height: 26px;
    }
    .card{
        margin-bottom: 40px;
        &:nth-last-child(1) {
            margin: 0;
        }
    }
    p{
        margin: 40px 0;
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #333333;
        line-height: 26px;
    }
    .footer{
        display: flex;
        justify-content: center;
        margin-top: 40px;
        column-gap: 40px;
    }
</style>