<template>
    <div>
        <p>
            XInjiang Userty Design Pro Pro为新疆油田相关系统产品的界面设计、用户体验问题给予的设计方案。
            XInjiang Userty Design Pro Pro为新疆油田相关系统产品的界面设计、用户体验问题给予的设计方案。
        </p>
        <o-card class="card">
            <div class="title">水平布局</div>
            <horizontal-form></horizontal-form>
        </o-card>
        <o-card class="card">
            <div class="title">垂直布局</div>
            <vertical-form></vertical-form>
        </o-card>
        <o-card class="card">
            <div class="title">左右布局</div>
            <between-form></between-form>
        </o-card>
        <o-card class="card">
            <div class="title">其他布局</div>
            <other-form></other-form>
        </o-card>
    </div>
</template>

<script>
import HorizontalForm from "./components/horizontal.vue";
import VerticalForm from "./components/vertical.vue";
import BetweenForm from "./components/between.vue";
import OtherForm from "./components/other.vue";

export default {
    name: 'grid',
    components: {
        HorizontalForm,
        VerticalForm,
        BetweenForm,
        OtherForm
    }
}
</script>

<style lang="less" scoped>
    .title {
        color: @primary-color;
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 16px;
        font-family: Source Han Sans CN;
        font-weight: 500;
    }
    .card{
        margin-bottom: 20px;
    }
    p{
        margin: 10px 0 20px;
    }
</style>