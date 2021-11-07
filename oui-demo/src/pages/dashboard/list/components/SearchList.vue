<template>
    <o-table
        :loading="loading"
        :columns="columns"
        :data-source="dataSource"
        :row-selection="{ onChange, onSelect, onSelectAll }"
        @change="$event => $emit('change', $event)"
    >
        <template slot="status" slot-scope="type">
            <div :class="`status-icon status-icon-${type}`">
                <span class="icon"></span>
                <span class="text">{{ handleType[type] }}</span>
            </div>
        </template>
        <template slot="operate">
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
        key: 'status',
        scopedSlots: { customRender: 'status' }
    },
    {
        title: '日期',
        dataIndex: 'datetime',
        key: 'datetime'
    },
    {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
        fixed: 'right',
        width: 200,
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

<style lang="less" scoped>
.status-icon {
    position: relative;
    display: flex;
    align-items: center;
}
.status-icon > span {
    display: inline-block;
}
.status-icon > .icon {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    margin-right: 10px;
    position: relative;
}
.status-icon > .icon::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    top: calc((100% - 10px) / 2);
    left: calc((100% - 10px) / 2);
}
.status-icon > .text {
    line-height: 16px;
}
.status-icon-success > .icon {
    background-color: rgba(#52c41a, 0.5);
}
.status-icon-success > .icon::before {
    background-color: #52c41a;
}
.status-icon-warning > .icon {
    background-color: rgba(#faad14, 0.5);
}
.status-icon-warning > .icon::before {
    background-color: #faad14;
}
.status-icon-error > .icon {
    background-color: rgba(#f5222d, 0.5);
}
.status-icon-error > .icon::before {
    background-color: #f5222d;
}
</style>
