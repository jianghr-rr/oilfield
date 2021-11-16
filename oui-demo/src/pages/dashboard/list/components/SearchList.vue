<template>
    <o-table
        :loading="loading"
        :columns="columns"
        :data-source="dataSource"
        :row-selection="{ onChange, onSelect, onSelectAll }"
        :scroll="{x: 'max-content'}"
        @change="$event => $emit('change', $event)"
    >
        <template slot="status" slot-scope="type">
            <status :type="type" :title="handleType[type]" />
        </template>
        <template slot="operate">
            <a>二次交接</a>
        </template>
    </o-table>
</template>

<script>
import Status from '@/components/status'
const columns = [
    {
        title: '样品批号',
        dataIndex: 'batchNo',
        key: 'batchNo',
        fixed: 'left',
        width: 200,
        ellipsis: true
    },
    {
        title: '描述',
        dataIndex: 'desc',
        key: 'desc',
        width: 200,
        ellipsis: true
    },
    {
        title: '项目名称',
        dataIndex: 'projectName',
        key: 'projectName',
        width: 200,
        ellipsis: true
    },
    {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        width: 150,
        ellipsis: true,
        scopedSlots: { customRender: 'status' }
    },
    {
        title: '日期',
        dataIndex: 'datetime',
        key: 'datetime',
        width: 200,
        ellipsis: true
    },
    {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
        fixed: 'right',
        width: 200,
        ellipsis: true,
        scopedSlots: { customRender: 'operate' }
    }
];
const HANDLE_TYPE = {
    success: '交接成功',
    warning: '二次交接',
    error: '交接异常'
};
export default {
    name: 'SearchList',
    components: {Status},
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
            columns,
            handleType: HANDLE_TYPE
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
