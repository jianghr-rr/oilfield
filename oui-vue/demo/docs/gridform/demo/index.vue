<template>
    <div class="container">
        <h1>多类型布局表单</h1>
        <basic-md />
        <dtl-md />
        <vertical-md />
    </div>
</template>

<script>

// import BaseForm from './BaseForm.vue';
// import DtlForm from './DtlForm.vue';
// import VerticalForm from './VerticalForm.vue';

import BasicMd from './basicMd.md';
import DtlMd from './dtlMd.md';
import VerticalMd from './verticalMd.md';

export default {
    name: 'GridFormPage',
    components: {
        // BaseForm,
        // DtlForm,
        // VerticalForm,
        BasicMd,
        DtlMd,
        VerticalMd
    },
    computed: {
        color() {
            return this.$store.getters.color;
        }
    }
}
</script>

<style lang="less" scoped>
    .container{
        .view-item{
            margin-bottom: 20px;
            box-sizing: border-box;
            padding: 20px;
            box-shadow:  0 2px 12px 0 rgba(0, 0, 0, 0.1);
        }
    }
</style>
