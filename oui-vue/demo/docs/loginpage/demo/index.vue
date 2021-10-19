<template>
    <div>
        <h1>登录页</h1>
        <basic />
        <api>
            <template slot="cn">
                <CN />
            </template>
             <template slot="us">
                <US />
            </template>
        </api>
    </div>
</template>

<script>
import Basic from './basic.md';
import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';

const TYPE = {
    LOGIN: 'login',
    MESSAGE: 'message',
    REGISTER: 'register'
};

export default {
    name: 'LoginPageMain',
    components: {
        Basic,
        CN,
        US
    },
    data() {
        return {
            type: TYPE.LOGIN,
            loading: false
        }
    },
    methods: {
        mockRequest() {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, 2000);
            });
        },
        async handleRegister(values) {
            try {
                this.loading = true;
                await this.mockRequest();
                this.$ommessage.info(`注册成功，注册参数是: ${JSON.stringify(values)}`);
                this.type = TYPE.LOGIN;
            }
            finally {
                this.loading = false;
            }
        },
        async handleLogin(values) {
            try {
                this.loading = true;
                await this.mockRequest();
                this.$ommessage.info(`登陆成功, 登录参数是: ${JSON.stringify(values)}`);
            }
            finally {
                this.loading = false;
            }
        },
        handleRemember(val) {
            this.$ommessage.info(`记住登陆状态: ${val}`);
        },
        handleGetVeryCode() {
            this.$ommessage.info('获取短信验证码');
        },
        handleTypeChange(val) {
            this.type = val;
        }
    }
};
</script>
