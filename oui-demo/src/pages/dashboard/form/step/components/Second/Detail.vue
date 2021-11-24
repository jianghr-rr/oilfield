<template>
    <div>
        <o-table
            :columns="columns"
            :data-source="dataSource"
            :row-selection="{ onChange, onSelect, onSelectAll }"
            :scroll="{ x: 'max-content' }"
            @change="$event => $emit('change', $event)"
        >
            <template slot="status" slot-scope="type">
                <status :type="type" :title="handleType[type]" />
            </template>
            <template slot="operate" slot-scope="scoped, record, index">
                <a class="action" @click="$emit('finish', { scoped, index })">三次交接</a>
            </template>
        </o-table>
        <div class="footer">
            <o-button type="primary" @click="$emit('preStep')">上一步</o-button>
        </div>
    </div>
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
    warning: '三次交接',
    error: '交接异常'
};

const dataSource = new Array(30).fill().map((_item, index) => ({
    key: index,
    batchNo: `【样品批号】2020-${index}`,
    desc: '这是一段描述',
    projectName: '沉积岩粘土矿物X衍射分析',
    status: 'success',
    datetime: '2021-08-25 10:49:28'
}));

export default {
    name: 'SearchList',
    components: { Status },
    data() {
        return {
            columns,
            handleType: HANDLE_TYPE,
            dataSource
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
@import "../../index.less";
.action {
    padding: 4px 6px;
    border: 1px solid #d7d7d7;
    border-radius: 2px;
    color: #555;
}
.footer {
    margin-top: 50px;
    text-align: center;
}
</style>
