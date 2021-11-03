<template>
    <div class="container">
        <md :cn="md.cn" :us="md.us" />
        <basic-md />
    </div>
</template>

<script>

import BasicMd from './basic.md';

const md = {
  cn: `# Card List 卡片列表
        XinJiang Userty Design Pro为新疆油田相关系统产品的界面设计、用户体验问题给予的设计方案.
        ## 代码演示`,
  us: `# Card List
        XinJiang Userty Design Pro is a design scheme for interface design and user experience of related system products in Xinjiang oil field.`
};

export default {
    name: 'CardListPage',
    components: {
        BasicMd
    },
    data() {
        return {
            md
        }
    }
}
</script>

<style lang="less" scoped>

</style>
