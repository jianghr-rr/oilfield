<template>
    <div class="container">
        <o-form
            class="oil-grid-form"
            :style="{columnGap: `${gap || 0}%`}"
            :form="form"
            :name="options.name"
            @submit="handleSubmit"
        >
            <div
                class="oil-grid-form-item"
                :style="{flexBasis: `${span || 100}%`}"
                v-for="{control, ...item} in options.items" :key="item.dataIndex"
            >
                <o-form-item v-bind="item">
                    <slot :name="item.dataIndex" :data="control"></slot>
                </o-form-item>
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
        .oil-grid-form{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            &-item{

            }
        }
    }
    
</style>
