<template>
    <div class="container">
        <o-form
            class="oil-grid-form"
            :form="form"
            :name="options.name"
            @submit="handleSubmit"
        >
            <div class="oil-grid-form-row" >
                <!-- grid left -->
                <div v-if="!!options.logo" :class="['oil-grid-form-col', 'col-left']">
                    <o-form-item v-bind="{...options.logo}">
                        <slot name="logo" :data="(options.logo || {}).control"></slot>
                    </o-form-item>
                </div>
                <!-- grit right -->
                <div :class="['oil-grid-form-col', 'oil-grid-form-content', ...(!!options.logo ? ['col-right'] : [])]" :style="{columnGap: `${gap || 0}%`}">
                    <o-form-item
                        v-for="{control, ...item} in options.items"
                        :key="item.dataIndex"
                        v-bind="item"
                        :style="{flexBasis: `${item.span ? item.span : (span || 100)}%`}"
                    >
                        <slot :name="item.dataIndex" :data="control"></slot>
                    </o-form-item>
                </div>
            </div>
        </o-form>
    </div>
</template>
<script>

import logo from '../../assets/logo.png';

export default {
    name: 'GridForm',
    props: {
        form: {
            type: Object,
            default: () => {
                return {};
            }
        },
        options: {
            type: Object,
            default: () => {
                return {
                    name: 'oil-form',
                    items: []
                };
            }
        },
        span: Number || String,
        gap: Number || String
    },
    data() {
        return {
            logo
        }
    },
    computed: {
        color() {
            return this.$store.getters.color;
        }
    },
    methods: {
        handleSubmit() {

        }
    }
};
</script>

<style lang="less" scoped>
    .container{
        width: 100%;
        position: relative;
        .oil-grid-form{
            &-row{
                display: flex;
            }
            &-col{
                flex: 1;
                &.col-left{
                    flex-basis: 40%;
                }
              
                &.col-right{
                    flex-basis: 60%;
                   
                }
            }
            &-content{
                width: 100%;
                display: flex;
                flex-wrap: wrap;
            }
        }
    }
</style>
