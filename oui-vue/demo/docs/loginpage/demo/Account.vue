<template>
    <div class="oil-account-login">
        <o-form :form="form" @submit="handleSubmit">
            <o-form-item>
                <o-input
                    class="oil-input"
                    v-decorator="[
                        'userName',
                        {
                            rules: [
                                {required: true, message: '请输入用户名称'}
                            ]
                        }
                    ]"
                    :maxLength="20"
                    placeholder="请输入用户名称"
                >
                    <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25); font-size: 24px;" />
                </o-input>
            </o-form-item>
            <o-form-item>
                <o-input
                    class="oil-input"
                    v-decorator="[
                        'password',
                        {
                            rules: [
                                {required: true, message: '请输入登录密码'}
                            ]
                        }
                    ]"
                    type="password"
                    :maxLength="20"
                    placeholder="请输入登录密码"
                >
                    <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25); font-size: 24px;" />
                </o-input>
            </o-form-item>
            <div class="oil-very oil-form-item">
                <div class="oil-very-item">
                    <o-form-item>
                        <o-input
                            class="oil-input"
                            v-decorator="[
                                'verycode',
                                {
                                    rules: [
                                        {required: true, message: '请输入右侧校验码'},
                                        {validator: handleVeryCode}
                                    ]
                                }
                            ]"
                            :maxLength="4"
                            placeholder="请输入右侧校验码"
                        />
                    </o-form-item>
                </div>
                <div class="oil-very-item" @click="getVeryCode">
                    {{veryCode}}
                </div>
            </div>
            <div class="oil-form-item oil-checkbox-line">
                <div
                    style="display: flex;align-items: center;width: 100px;user-select: none;cursor: pointer;"
                    @click="isRemember = !isRemember"
                >
                    <o-input type="checkbox" :checked="isRemember" />
                    <div style="margin-left: 10px;">记住登录状态</div>
                </div>
            </div>
            <o-form-item style="margin-bottom: 10px;">
                <o-button
                    type="primary"
                    html-type="submit"
                    style="width: 100%"
                    :loading="loading"
                >
                    登录
                </o-button>
            </o-form-item>
        </o-form>
        <div class="oil-account-login-footer">
            <div @click="$emit('onRegister')">
                <span>还没有账号?</span>
                <a :style="{color}">立即注册</a>
            </div>
            <div @click="$emit('onMessage')">
                <a :style="{color}">忘记登录密码</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Account',
    props: {
        loading: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            form: null,
            veryCode: null,
            isRemember: false
        };
    },
    watch: {
        isRemember: {
            handler(val) {
                this.$emit('onRemember', val);
            }
        }
    },
    computed: {
        color() {
            return this.$store.getters.color;
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.form = this.$form.createForm(this, {name: 'oil_login'});
            this.getVeryCode();
        });
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (err) {
                    this.getVeryCode();
                }
                if (!err) {
                    this.$emit('onLogin', values);
                }
            });
        },
        getVeryCode() {
            const veryCode = Math.random().toString(36).substr(2, 4);
            this.veryCode = veryCode.toUpperCase();
        },
        handleVeryCode(_rule, value, callback){
            if (!value) {
                callback();
            }
            if (value.length !== 4) {
                callback('验证码错误');
            }
            if (value.length >=4 && value !== this.veryCode) {
                callback('验证码错误');
            }
            callback();
        }
    },
};
</script>

<style lang="less">
    .oil-account-login{
        width: 316px;
        .ant-btn {
            width: 100%;
        }
        .oil-input, .ant-btn {
            height: 60px;
            input, .ant-input {
                height: 60px;
                padding-left: 50px;
            }
        }
        .oil-form-item{
            display: flex;
            margin-bottom: 15px;
            align-items: center;
        }
        .oil-very{
            justify-content: space-between;
            &-item{
                height: 60px;
                &:nth-child(1) {
                    width: 186px;
                }
                &:nth-child(2) {
                    width: 110px;
                    background-color: rgba(255, 255, 255, 1);
                    box-sizing: border-box;
                    border: 1px solid rgba(215, 215, 215, 1);
                    border-radius: 4px;
                    font-family: 'SourceHanSansCN-Normal', 'Source Han Sans CN Normal', 'Source Han Sans CN', sans-serif;
                    font-weight: 400;
                    font-style: normal;
                    font-size: 28px;
                    letter-spacing: 3px;
                    color: #555555;
                    text-align: center;
                    line-height: 60px;
                    user-select: none;
                    cursor: pointer;
                }
            }
        }
        .oil-checkbox-line{
            .ant-input:hover{
                border-color: transparent;
            }
            font-family: 'SourceHanSansCN-Normal', 'Source Han Sans CN Normal', 'Source Han Sans CN', sans-serif;
            font-weight: 400;
            font-style: normal;
            font-size: 12px;
            color: #AAAAAA;
        }

        &-footer{
            display: flex;
            justify-content: space-between;
            align-items: center;
            div {
                font-family: 'SourceHanSansCN-Normal', 'Source Han Sans CN Normal', 'Source Han Sans CN', sans-serif;
                font-weight: 400;
                font-style: normal;
                font-size: 12px;
                color: #AAAAAA;
                user-select: none;
                a {
                    cursor: pointer;
                }
            }
        }
       
    }
</style>