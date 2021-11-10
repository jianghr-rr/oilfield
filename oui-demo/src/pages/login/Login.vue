<template>
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
                    <Message
                        v-else-if="currIndex === messageIndex"
                        :loading="loading"
                        @onRegister="currIndex = registerIndex"
                        @onGetVeryCode="handleGetVeryCode"
                        @onMessage="currIndex = messageIndex"
                        @onLogin="handleLogin"
                        @onRemember="handleRemember"
                    />
                </div>
            </div>
        </o-col>
    </o-row>
</template>

<script>

import Tab from './Tab.vue';
import Account from './Account.vue';
import Register from './Register.vue';
import Message from './Message.vue';

import {login, getRoutesConfig} from '@/services/user'
import {setAuthorization} from '@/utils/request'
import {loadRoutes} from '@/utils/routerUtil'
import {mapState, mapMutations} from 'vuex'

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
        Message,
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
        ...mapMutations('account', ['setUser', 'setPermissions', 'setRoles']),
        async handleLogin(values) {
            const {userName, password, tel, code} = values;
            try {
                this.loading = true;
                const res = await login(userName || tel, password || code);
                this.afterLogin(res);
            }
            finally {
                this.loading = false;
            }
        },
        async afterLogin(params) {
            const {code, data, message} = params.data
            if (code >= 0) {
                const {user, permissions, roles} = data
                this.setUser(user)
                this.setPermissions(permissions)
                this.setRoles(roles)
                setAuthorization({token: data.token, expireAt: new Date(data.expireAt)})
                // 获取路由配置
                const result = await getRoutesConfig();
                const routesConfig = result.data.data
                loadRoutes(routesConfig);
                this.$router.push('/form/grid');
                this.$omnotification['success']({
                    message
                });
            }
            else {
                 this.$omnotification['error']({
                    message
                });
            }
            return;
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

<style lang="less" scoped>
    .oil-img{
        width: 100%;
        height: 482px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
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