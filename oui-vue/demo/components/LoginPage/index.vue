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
                <Register
                    :loading="loading"
                    @onLogin="currIndex = 0"
                    @onRegister="handleRegister"
                    @onGetVeryCode="handleGetVeryCode"
                />
            </div>
            <div v-else>
                <Tab :tabs="tabs" :controlIndex="currIndex" @onChange="handleTabChange" />
                <Account
                    v-if="currIndex === 0"
                    :loading="loading"
                    @onRegister="currIndex = 2"
                    @onMessage="currIndex = 1"
                    @onLogin="handleLogin"
                    @onRemember="handleRemember"
                />
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

const tabs = [
    {title: '账号登录', value: 'login'},
    {title: '短信登录', value: 'message'},
    {title: '注册', value: 'register', hidden: true}
];

export default {
    name: 'OLoginPage',
    components: {
        Tab,
        Account,
        Message,
        Register
    },
    props: {
        type: {
            type: String,
            default: 'login'
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            logo,
            tabs,
            currIndex: 0
        }
    },
    watch: {
        type: {
            handler(val) {
                const currIndex = tabs.findIndex(item => item.value === val);
                if (currIndex === -1) {
                    this.currIndex = 0;
                }
                else {
                    this.currIndex = currIndex;
                }
            },
            immediate: true
        },
        currIndex: {
            handler(val) {
                const type = tabs[val].value;
                this.$emit('onTypeChange', type);
            }
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
        },
        handleRegister(values) {
            this.$emit('onRegister', values);
        },
        handleLogin(values) {
            this.$emit('onLogin', values)
        },
        handleRemember(val) {
            this.$emit('onRemember', val);
        },
        handleGetVeryCode(){
            this.$emit('onGetVeryCode');
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
