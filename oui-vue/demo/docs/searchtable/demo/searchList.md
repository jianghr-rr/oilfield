<cn>
#### 列表部组件
</cn>

<us>
#### Components of the table section
</us>

## 列表部组件

```vue
<template>
    <o-table
        :loading="loading"
        :columns="columns"
        :data-source="dataSource"
        @change="$event => $emit('change', $event)"
        :row-selection="{onChange, onSelect, onSelectAll}"
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
                return new Array(5).fill('').map((_item, index) => ({
                    key: index,
                    batchNo: `【样品批号】2020-${index}`,
                    desc: '这是一段描述',
                    projectName: '沉积岩粘土矿物X衍射分析',
                    status: '二次交接',
                    datetime: '2021-08-25 10:49:28'
                }));;
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

```