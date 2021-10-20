<template>
    <div class="oil-step-form">
        <o-steps :current="current">
            <o-step v-for="item in steps" :key="item.name" v-bind="item" />
        </o-steps>
        <div
            class="oil-step-form-item" 
            v-for="(item, index) in steps"
            :key="item.name"
            :style="`${current !== index ? 'display: none' : ''}`"
        >
            <slot :name="item.name" :data="item"></slot>
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
        &-item{
            min-height: 500px;
            box-sizing: border-box;
            padding: 40px;
        }
        &-footer{
            display: flex;
            justify-content: center;
        }
    }
</style>
