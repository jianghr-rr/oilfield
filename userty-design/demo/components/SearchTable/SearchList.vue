<template>
    <o-table
        :loading="loading"
        :columns="columns"
        :data-source="dataSource"
        :row-selection="{onChange, onSelect, onSelectAll}"
        @change="$event => $emit('change', $event)"
    >
        <template slot="datetime" slot-scope="text, record">
            {{text}}
        </template>
        <template slot="operate" slot-scope="scoped">
            <a>二次交接</a>
        </template>
    </o-table>
</template>

<script>
const columns = [
    {
        title: '样品批号',
        dataIndex: 'batchNo',
        key: 'batchNo',
        fixed: 'left',
        width: 200
    },
    {
        title: '描述',
        dataIndex: 'desc',
        key: 'desc'
    },
    {
        title: '项目名称',
        dataIndex: 'projectName',
        key: 'projectName'
    },
    {
        title: '状态',
        dataIndex: 'status',
        key: 'status'
    },
    {
        title: '日期',
        dataIndex: 'datetime',
        key: 'datetime',
        scopedSlots: {customRender: 'datetime'}
    },
    {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
        fixed: 'right',
        width: 200,
        scopedSlots: {customRender: 'operate'}
    }
];
export default {
    name: 'SearchList',
    props: {
        loading: {
            type: Boolean,
            default: false
        },
        dataSource: {
            type: Array,
            default: () => {
                return [];
            }
        }
    },
    data() {
        return {
            columns
        }
    },
    methods: {
        onChange(selectedRowKeys, selectedRows) {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        onSelect(record, selected, selectedRows) {
            console.log(record, selected, selectedRows);
        },
        onSelectAll(selected, selectedRows, changeRows) {
            console.log(selected, selectedRows, changeRows);
        }
    }
}
</script>

<style lang="less" scoped>
</style>
