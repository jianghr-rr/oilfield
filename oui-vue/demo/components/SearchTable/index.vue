<template>
    <div class="o-search-table">
        <div class="o-filters-area">
            <grid-form :form="form" :options="{items: filterOptions}" :span="30" :gap="5">
                <template v-for="{dataIndex} in filterOptions" :slot="dataIndex" slot-scope="{data = {}}">
                    <div v-if="dataIndex === 'optionsArea'" class="option-area">
                        <o-button size="large" @click="handleReset">重置</o-button>
                        <o-button size="large" type="primary" @click="handleSubmit">查询</o-button>
                    </div>
                    <slot :name="dataIndex" :data="data"></slot>
                </template>
            </grid-form>
        </div>
        <div class="o-table-area">
            <o-table
                :columns="columns"
                :data-source="dataSource"
                v-bind="tableOption"
                @expandedRowsChange="$event => $emit('expandedRowsChange', $event)"
                @change="$event => $emit('change', $event)"
                @expand="$event => $emit('expand', $event)"
            >
                <span
                    v-for="{scopedSlots} in columns"
                    :slot="(scopedSlots || {}).customRender"
                    slot-scope="text, record"
                >
                    <slot :name="(scopedSlots || {}).customRender" :data="{text, record}" />
                </span>
            </o-table>
        </div>
    </div>
</template>

<script>
    import GridForm from '../GridForm/index.vue';

    /**
     * filter options
    */
    const filtersMixins = {
        data() {
            return {
                form: null,
                filterOptions: []
            }
        },
        watch: {
            filters: {
                handler(items) {
                    this.filterOptions = items.map(item => ({
                        ...item,
                        control: {
                            decorator: [item.dataIndex],
                            ...item.control
                        }
                    }));
                    this.filterOptions = [...this.filterOptions, {dataIndex: 'optionsArea'}];
                },
                immediate: true
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.form = this.$form.createForm(this, {name: 'oil_form'});
            });
        },
        methods: {
            handleReset() {
                this.form.resetFields();
            },
            handleSubmit() {
                this.form.validateFields((err, values) => {
                    if (!err) {
                        this.$emit('onSearch', values);
                    }
                });
            }
        }
    };

    export default {
        name: 'SearchTable',
        components: {
            GridForm
        },
        mixins: [filtersMixins],
        props: {
            filters: {
                type: Array,
                default: () => {
                    return [];
                }
            },
            columns: {
                type: Array,
                default: () => {
                    return [];
                }
            },
            dataSource: {
                type: Array,
                default: () => {
                    return [];
                }
            },
            tableOption: {
                type: Object,
                default: () => {
                    return {};
                }
            }
        },
    }
</script>

<style lang="less" scoped>
    .o-search-table{
        .option-area{
            position: relative;
            top: 40px;
            float: right;
        }
        button {
            margin-left: 10px;
        }

        .o-filters-area{
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            box-sizing: border-box;
            padding: 5px 25px;
            margin-bottom: 40px;
        }
        .o-table-area{

        }
    }

</style>
