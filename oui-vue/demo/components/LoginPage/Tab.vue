<template>
    <div class="oil-tab">
        <div
            v-for="(item, index) in tabs"
            v-if="!item.hidden"
            :class="['oil-tab-item', controlIndex === index ? 'selected' : '']"
            :key="item.value"
            @click="$emit('onChange', index)"
        >
            {{item.title}}
        </div>
        <div class="oil-tab-bottomline" :style="{left: `${controlIndex * (100 / (tabs.length - 1))}%`, backgroundColor: color}"></div>
    </div>
</template>

<script>
export default {
    name: 'Tab',
    props: {
        controlIndex: {
            type: Number,
            default: 0
        },
        tabs: Array
    },
    computed: {
        color() {
            return this.$store.getters.color;
        }
    }
}
</script>

<style lang="less" scoped>
    .oil-tab{
        display: flex;
        height: 78px;
        position: relative;
        &-item{
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'SourceHanSansCN-Normal', 'Source Han Sans CN Normal', 'Source Han Sans CN', sans-serif;
            font-weight: 400;
            font-style: normal;
            font-size: 14px;
            color: #555555;
            user-select: none;
            cursor: pointer;
        }
        &-bottomline{
            width: 50%;
            height: 2px;
            position: absolute;
            bottom: 0;
            left: 0;
            transition: left .1s linear;
        }
    }
</style>