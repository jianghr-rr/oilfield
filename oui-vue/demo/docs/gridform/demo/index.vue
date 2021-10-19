<template>
    <div class="container">
        <h1>多类型布局表单</h1>
        <md :cn="md.cn" :us="md.us" />
        <horizontal-md />
        <dtl-md />
        <vertical-md />
        <other-md />
        <api>
            <template slot="cn">
                <CN />
            </template>
             <template slot="us">
                <US />
            </template>
        </api>
    </div>
</template>

<script>
import BasicMd from './basic.md';
import HorizontalMd from './horizontalMd.md';
import DtlMd from './dtlMd.md';
import VerticalMd from './verticalMd.md';
import OtherMd from './Other.md';

import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';

export default {
    name: 'GridFormMain',
    components: {
        BasicMd,
        HorizontalMd,
        DtlMd,
        VerticalMd,
        OtherMd,
        CN,
        US
    },
    data() {
        return {
            md: {
                cn: "使用 `<grid-form/>` 标签创建表单。可以通过不同的参数来快速配置不同的内容。",
                us: "Create a form using the `< grid-form/ >` tag. You can quickly configure different content with different parameters."
            }  
        };
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
