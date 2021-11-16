<template>
    <div class="header">
        <img src="@/assets/img/logo.png" />
        <div class="title" :style="{color}">{{systemName}}</div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'PageHeader',
    computed: {
        ...mapState('setting', ['systemName']),
        ...mapState({
            color: state => state.setting.theme.color
        })
    }
}
</script>

<style lang="less" scoped>
    .header{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background: #FFF;
        height: 88px;
        box-sizing: border-box;
        padding: 0 30px;
        box-shadow: 0 2px 8px #f0f1f2;
        img {
            width: 40px;
            height: 40px;
            margin-right: 20px;
        }
        .title{
            display: flex;
            align-items: center;
            font-size: 20px;
            font-weight: 400;
        }
    }
</style>