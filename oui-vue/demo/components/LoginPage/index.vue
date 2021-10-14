<template>
    <div class="oil-login-page">
        <div class="oil-img">
            <img :src="logo" />
            <div class="oil-title" :style="{color}">
                XinJiang  Userty Design
            </div>
        </div>
        <div class="oil-form">
            <div v-if="currIndex === 2" style="padding: 25px 0;">
                <Register @onLogin="currIndex = 0" />
            </div>
            <div v-else>
                <Tab :controlIndex="currIndex" @onChange="handleTabChange" />
                <Account v-if="currIndex === 0" @onRegister="currIndex = 2" @onMessage="currIndex = 1" />
                <Message v-else-if="currIndex === 1" />
            </div>
        </div>
    </div>
</template>
<script>

import logo from '../../assets/logo.png';
import Tab from './Tab.vue';
import Account from './Account.vue';
import Message from './Message.vue';
import Register from './Register.vue';

export default {
    name: 'LoginPage',
    components: {
        Tab,
        Account,
        Message,
        Register
    },
    data() {
        return {
            logo,
            currIndex: 0
        }
    },
    computed: {
        color() {
            return this.$store.getters.color;
        }
    },
    methods: {
        handleTabChange(val) {
            this.currIndex = val;
        }
    }
};
</script>

<style lang="less" scoped>
    .oil-login-page{
        min-height: 582px;
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        box-sizing: border-box;
        padding: calc((582px - 482px) / 2);
        .oil-img{
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img {
                width: 176px;
                height: 170px;
                margin-bottom: 40px;
            }
            .oil-title{
                font-family: 'SourceHanSansCN-Medium', 'Source Han Sans CN Medium', 'Source Han Sans CN Normal', 'Source Han Sans CN', sans-serif;
                font-weight: 500;
                font-style: normal;
                font-size: 24px;
                letter-spacing: 0.5px;
                text-align: center;
            }
        }
        .oil-form{
            border-width: 0px;
            width: 376px;
            min-height: 482px;
            background: inherit;
            background-color: rgba(255, 255, 255, 1);
            border: none;
            border-radius: 0px;
            -moz-box-shadow: 2px 2px 4px rgba(215, 215, 215, 0.345098039215686);
            -webkit-box-shadow: 2px 2px 4px rgb(215 215 215 / 35%);
            box-shadow:  0 2px 12px 0 rgba(0, 0, 0, 0.1);
            box-sizing: border-box;
            padding: 0 30px;
        }
    }
</style>
