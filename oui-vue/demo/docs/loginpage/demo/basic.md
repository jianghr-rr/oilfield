<cn>
#### 基本用法
使用 `<login-page/>` 标签创建页面。可以通过不同的回调函数来处理不同的登录事件。
</cn>

<us>
#### Basic
Use tag `<login-page/>` to create an login page. Different login events can be handled through different callback events themes.
</us>

```vue
<template>
    <login-page
        :type="type"
        :loading="loading"
        @onRegister="handleRegister"
        @onLogin="handleLogin"
        @onRemember="handleRemember"
        @onGetVeryCode="handleGetVeryCode"
        @onTypeChange="handleTypeChange"
    />
</template>


<script>
const TYPE = {
    LOGIN: 'login',
    MESSAGE: 'message',
    REGISTER: 'register'
};

export default {
    name: 'OilLoginPage',
    data() {
        return {
            type: TYPE.LOGIN, // page type
            loading: false // btn loading
        }
    },
    methods: {
        /* mock request */
        mockRequest() {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, 2000);
            });
        },
        /* register handler */
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
        /* login handler */
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

```
