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
          自定义配置表格
## 何时使用
需要快速配置通用查询表格页面时，可以使用 \`search table\` 组件快速定制化页面。
          ## 代码演示`,
  us: `# Modal
          Modal dialogs.
## When To Use
When requiring users to interact with the application, but without jumping to a new page and interrupting
the user's workflow, you can use \`Modal\` to create a new floating layer over the current page to get user
feedback or display information.
Additionally, if you need show a simple confirmation dialog, you can use \`antd.Modal.confirm()\`,
and so on.
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