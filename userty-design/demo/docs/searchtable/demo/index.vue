<template>
    <div>
        <md :cn="md.cn" :us="md.us" />
        <basic-md />
        <search-filters-md />
        <search-list-md />
    </div>
</template>

<script>

const md = {
  cn: `# Search Table 查询表格
          可搜索查询表格页
          ## 代码演示`,
  us: `# Search Table
        ## Examples
`,
};

import BasicMd from './basic.md';
import SearchFiltersMd from './searchFilters.md';
import SearchListMd from './searchList.md';

export default {
    name: 'SearchTablePage',
    components: {
        BasicMd,
        SearchFiltersMd,
        SearchListMd
    },
    data() {
        return {
            md
        };
    }
}
</script>

<style lang="less" scoped>

</style>