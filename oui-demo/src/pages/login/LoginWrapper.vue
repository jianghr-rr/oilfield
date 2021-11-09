<template>
    <common-layout>
        <login />
        <drawer v-if="!hideSetting" v-model="showSetting" placement="right">
            <div class="setting" slot="handler">
            <o-icon :type="showSetting ? 'close' : 'setting'" />
            </div>
            <setting />
        </drawer>
    </common-layout>
</template>

<script>

import CommonLayout from '@/layouts/CommonLayout'
import Login from './Login'
import Drawer from '@/components/tool/Drawer'
import Setting from '@/components/setting/Setting'

import {mapState} from 'vuex';

export default {
    name: 'OLoginPage',
    components: {
        CommonLayout,
        Login,
        Drawer,
        Setting
    },
    data() {
        return {
            showSetting: false
        }
    },
    computed: {
        ...mapState('setting', ['isMobile', 'theme', 'layout', 'footerLinks', 'copyright', 'fixedHeader', 'fixedSideBar',
            'fixedTabs', 'hideSetting', 'multiPage']),
    }
};
</script>

<style lang="less" scoped>
    .setting {
        background-color: @primary-color;
        color: @base-bg-color;
        border-radius: 5px 0 0 5px;
        line-height: 40px;
        font-size: 22px;
        width: 40px;
        height: 40px;
        box-shadow: -2px 0 8px @shadow-color;
    }
</style>