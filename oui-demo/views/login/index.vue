<template>
    <o-row type="flex" class="oil-row">
        <o-col :flex="1" class="oil-col">
            <div class="oil-img">
                <img :src="logo" :draggable="false" />
                <div class="oil-title" :style="{color}">
                    XinJiang  Userty Design
                </div>
            </div>
        </o-col>
        <o-col :flex="1" class="oil-col">
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
</template>
<script>

import logo from '../../assets/logo.png';
import Tab from './Tab.vue';
import Account from './Account.vue';
import Register from './Register.vue';

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
            logo,
            tabs,
            loginIndex: LOGIN_INDEX,
            messageIndex: MESSAGE_INDEX,
            registerIndex: REGISTER_INDEX,
            currIndex: LOGIN_INDEX,
            loading: false
        }
    },
    computed: {
        color() {
            return this.$store.getters.color;
        }
    },
    methods: {
        mockRequest(){
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, 1500);
            });
        },
        handleRegister(values) {
            this.$omnotification['success']({
                message: '注册成功'
            });
            console.log(values);
        },
        async handleLogin(values) {
            try {
                this.loading = true;
                await this.mockRequest();
                this.$omnotification['success']({
                    message: '登陆成功'
                });
                console.log(values);
                sessionStorage.setItem('login', true);
                this.$router.push('/components/button-cn/');
            }
            finally {
                this.loading = false;
            }
        },
        handleRemember(val) {
            this.$omnotification['success']({
                message: 'onRemember',
                description: `${val}`
            });
            localStorage.setItem('login', val);
        },
        handleGetVeryCode(){
            this.$omnotification['success']({
                message: 'onGetVeryCode'
            });
        }
    }
};
</script>

<style scoped>
    .oil-row{
        height: 100vh;
        box-sizing: border-box;
        padding: 0 calc((100vw - 651px - 350px) / 2);
    }
    .oil-col{
        display: flex;
        align-items: center;
    }
    .oil-img{
        width: 100%;
        height: 482px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        user-select: none;
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
