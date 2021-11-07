<template>
    <o-card>
        <o-row type="flex">
            <o-col :flex="1">
                <div class="oil-img">
                    <img src="@/assets/img/logo.png" />
                    <div class="oil-title" :style="{color}">
                        XinJiang  Userty Design
                    </div>
                </div>
            </o-col>
            <o-col :flex="1">
                <div class="oil-form">
                    <div v-if="currIndex === registerIndex" style="padding: 25px 0;">
                        <Register
                            :loading="loading"
                            @onLogin="currIndex = loginIndex"
                            @onRegister="handleRegister"
                            @onGetVeryCode="handleGetVeryCode"
                        />
                    </div>
                    <div v-else>
                        <Tab :tabs="tabs" :controlIndex.sync="currIndex" />
                        <Account
                            v-if="currIndex === loginIndex"
                            :loading="loading"
                            @onRegister="currIndex = registerIndex"
                            @onMessage="currIndex = messageIndex"
                            @onLogin="handleLogin"
                            @onRemember="handleRemember"
                        />
                        <div v-else-if="currIndex === messageIndex">
                            message form
                        </div>
                    </div>
                </div>
            </o-col>
        </o-row>
    </o-card>
</template>

<script>

import Tab from './Tab.vue';
import Account from './Account.vue';
import Register from './Register.vue';

import {mapState} from 'vuex'

const tabs = [
    {title: '账号登录', value: 'login'},
    {title: '短信登录', value: 'message'},
    {title: '注册', value: 'register', hidden: true}
];

const getIndex = type => tabs.findIndex(({value}) => value === type);

const LOGIN_INDEX = getIndex('login');
const MESSAGE_INDEX = getIndex('message');
const REGISTER_INDEX = getIndex('rgister');

export default {
    name: 'OLoginPage',
    components: {
        Tab,
        Account,
        Register
    },
    data() {
        return {
            tabs,
            loginIndex: LOGIN_INDEX,
            messageIndex: MESSAGE_INDEX,
            registerIndex: REGISTER_INDEX,
            currIndex: LOGIN_INDEX,
            loading: false
        }
    },
    computed: {
         ...mapState({
            color: state => state.setting.theme.color
        })
    },
    methods: {
        async handleLogin(values) {
            this.$omnotification['success']({
                message: '登陆成功'
            });
            console.log('values: ', values);
        },
        handleRegister(values) {
            console.log('onRegister: ', values);
        },
        handleRemember(val) {
            console.log('val: ', val);
        },
        handleGetVeryCode(){
            console.log('onGetVeryCode');
        }
    }
};
</script>

<style scoped>
    .oil-img{
        width: 100%;
        height: 482px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .oil-img > img{
        width: 176px;
        height: 170px;
        margin-bottom: 40px;
    }
    .oil-img > .oil-title{
        font-family: 'SourceHanSansCN-Medium', 'Source Han Sans CN Medium', 'Source Han Sans CN Normal', 'Source Han Sans CN', sans-serif;
        font-weight: 500;
        font-style: normal;
        font-size: 24px;
        letter-spacing: 0.5px;
        text-align: center;
    }
    .oil-form{
        border-width: 0px;
        margin: 0 auto;
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
</style>