<<template>
    <div>
        <search-table
            :filters="filterOptions"
            :columns="columns"
            :dataSource="data"
            :tableOption="{
                loading,
                scroll: {x: 'max-content'},
                rowSelection: {
                    onChange,
                    onSelect,
                    onSelectAll
                }
            }"
            @onSearch="handleSearch"
            @change="loadList"
        >
            <template v-for="{dataIndex} in filterOptions" :slot="dataIndex" slot-scope="{data}">
                <o-input size="large" v-bind="data" v-decorator="data.decorator" />
            </template>
            <template slot="datetime" slot-scope="{data: {text, record}}">
                {{text}}
            </template>
            <template slot="operate" slot-scope="scoped">
                <a>二次交接</a>
            </template>
        </search-table>
    </div>
</template>

<script>
import SearchTable from '../../components/SearchTable/index.vue';

export default {
    name: 'Test',
    components: {
        SearchTable
    },
    data() {
        return {
            filterOptions:[
                {
                    dataIndex: 'batchNo',
                    label: '样品批号',
                    control: {
                        placeholder: '请输入样品批号'
                    }
                },
                {
                    dataIndex: 'desc',
                    label: '描述',
                    control: {
                        placeholder: '请输入描述'
                    }
                },
                {
                    dataIndex: 'projectName',
                    label: '项目名称',
                    control: {
                        placeholder: '请输入项目名称'
                    }
                },
                {
                    dataIndex: 'status',
                    label: '状态',
                    control: {
                        placeholder: '请输入状态'
                    }
                },
                {
                    dataIndex: 'date',
                    label: '交接日期',
                    control: {
                        placeholder: '请输入交接日期'
                    }
                }
            ],
            columns: [
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
            ],
            loading: false,
            data: []
        };
    },
    mounted() {
        this.loadList();
    },
    methods: {
        mockRequest() {
            return new Promise(resolve => {
                setTimeout(() => {
                    const res = new Array(30).fill('').map((_item, index) => ({
                        key: index,
                        batchNo: `【样品批号】2020-${index}`,
                        desc: '这是一段描述',
                        projectName: '沉积岩粘土矿物X衍射分析',
                        status: '二次交接',
                        datetime: '2021-08-25 10:49:28'
                    }));
                    resolve(res);
                }, 1000);
            });
        },
        async loadList() {
            try {
                this.loading = true;
                const res = await this.mockRequest();
                this.data = res;
            }
            finally {
                this.loading = false;
            }
        },
        handleSearch(values = {}) {
            console.log(`筛选参数是: ${JSON.stringify(values)}`)
            this.loadList();
        },
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