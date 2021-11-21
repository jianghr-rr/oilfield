<template>
    <div>
        <o-card style="margin-bottom: 20px;" :bordered="false">
            <search-filters :loading="loading" @onSearch="handleSearch" />
        </o-card>
        <search-list :loading="loading" :dataSource="data" @change="loadList" />
    </div>
</template>

<script>
import SearchFilters from './components/SearchFilters.vue';
import SearchList from './components/SearchList.vue';

const TYPE = ['success', 'warning', 'error'];

export default {
    name: 'SearchTablePage',
    components: {
        SearchFilters,
        SearchList
    },
    data() {
        return {
            data: [],
            loading: false
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
                        status: TYPE[index] || 'success',
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
        }
    }
}
</script>

<style lang="less" scoped>
</style>