<template>
    <div :class="`status-icon status-icon-${type}`">
        <span class="icon"></span>
        <span class="text">{{ title }}</span>
    </div>
</template>

<script>
export default {
    name: 'OStatus',
    props: ['title', 'type']
}
</script>

<style lang="less" scoped>
.status-icon {
    position: relative;
    display: flex;
    align-items: center;
    span {
        display: inline-block;
    }
    .icon {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        margin-right: 10px;
        position: relative;
        &::before {
            content: "";
            width: 10px;
            height: 10px;
            border-radius: 50%;
            position: absolute;
            top: calc((100% - 10px) / 2);
            left: calc((100% - 10px) / 2);
        }
        .text {
            line-height: 16px;
        }
    }
}
.status-icon-success > .icon {
    background-color: rgba(@primary-color, 0.5);
}
.status-icon-success > .icon::before {
    background-color: @primary-color;
}
.status-icon-warning > .icon {
    background-color: rgba(@warning-color, 0.5);
}
.status-icon-warning > .icon::before {
    background-color: @warning-color;
}
.status-icon-error > .icon {
    background-color: rgba(@error-color, 0.5);
}
.status-icon-error > .icon::before {
    background-color: @error-color;
}
</style>