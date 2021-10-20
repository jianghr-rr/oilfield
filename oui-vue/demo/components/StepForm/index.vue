<template>
    <div class="oil-step-form">
        <o-steps :current="current">
            <o-step v-for="item in steps" :key="item.name" v-bind="item" />
        </o-steps>
        <div class="oil-step-form-content">
            <slot :name="currentItem.name" :data="currentItem" />
        </div>
        <div class="oil-step-form-footer">
            <slot name="footer" />
        </div>
    </div>
</template>
<script>

export default {
    name: 'StepForm',
    props: {
        steps: {
            type: Array,
            default: () => []
        },
        current: {
            type: Number,
            default: 0
        }
    },
    computed: {
        currentItem() {
            return this.steps[this.current] || {};
        }
    },
    methods: {
       
    }
};
</script>

<style lang="less" scoped>
    .oil-step-form{
        &-content{
            min-height: 300px;
            box-sizing: border-box;
            padding: 40px;
        }
        &-footer{
            display: flex;
            justify-content: center;
        }
    }
</style>
