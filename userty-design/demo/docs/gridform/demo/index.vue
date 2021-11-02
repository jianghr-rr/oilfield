<template>
    <div class="container">
        <md :cn="md.cn" :us="md.us" />
        <horizontal-md />
        <left-right-md />
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
import LeftRightMd from './leftRight.md';
import VerticalMd from './verticalMd.md';
import OtherMd from './Other.md';

import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';

const md = {
  cn: `# StepForm 分布表单
        使用内置的栅格系统搭配\`<o-form />\`标签来创建多种布局的表单。可以快速配置出你想要的内容。
        ## 代码演示`,
  us: `# StepForm
       Use the built-in grid system with the \`< o-form / >\` tag to create forms with multiple layouts. You can quickly configure what you want.`
};

export default {
    name: 'GridFormMain',
    components: {
        BasicMd,
        HorizontalMd,
        LeftRightMd,
        VerticalMd,
        OtherMd,
        CN,
        US
    },
    data() {
        return {
            md  
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
