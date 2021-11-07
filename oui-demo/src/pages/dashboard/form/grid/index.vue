<template>
    <o-card :bordered="false">
        <div class="title">水平布局</div>
        <horizontal-form></horizontal-form>
        <o-divider></o-divider>
        <div class="title">垂直布局</div>
        <vertical-form></vertical-form>
        <o-divider></o-divider>
        <div class="title">左右布局</div>
        <between-form></between-form>
        <o-divider></o-divider>
        <div class="title">其他布局</div>
        <other-form></other-form>
    </o-card>
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
        color: @title-color;
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 16px;
    }
</style>