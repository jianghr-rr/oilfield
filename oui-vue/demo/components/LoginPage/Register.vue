<template>
    <div class="oil-register">
        <div class="oil-register-title">用户注册</div>
        <o-form :form="form" @submit="handleSubmit">
            <o-form-item class="oil-form-item">
                <o-input
                    class="oil-input"
                    v-decorator="[
                        'phone',
                        {
                            rules: [
                                {required: true, message: '请输入手机号码'}
                            ]
                        }
                    ]"
                    placeholder="请输入手机号码"
                />
            </o-form-item>
            <o-form-item class="oil-form-item oil-very-line">
                <o-input
                    class="oil-input"
                    v-decorator="[
                        'verycode',
                        {
                            rules: [
                                {required: true, message: '请输入短信验证码'}
                            ]
                        }
                    ]"
                    placeholder="请输入短信验证码"
                >
                    <span slot="addonAfter" style="user-select: none;cursor: pointer;">
                        <span :style="{color}">获取验证码</span>
                    </span>
                </o-input>
            </o-form-item>
             <o-form-item class="oil-form-item">
                <o-input
                    class="oil-input"
                    v-decorator="[
                        'password',
                        {
                            rules: [
                                {required: true, message: '设置6-20位登陆密码'}
                            ]
                        }
                    ]"
                    type="password"
                    placeholder="设置6-20位登陆密码"
                />
            </o-form-item>
             <o-form-item class="oil-form-item">
                <o-input
                    class="oil-input"
                    v-decorator="[
                        'passwordConfirm',
                        {
                            rules: [
                                {required: true, message: '再次请输入登录密码'}
                            ]
                        }
                    ]"
                    type="password"
                    placeholder="再次请输入登录密码"
                />
            </o-form-item>
            <div class="oil-form-item oil-checkbox-line">
                <div
                    style="width: 350px;display: flex;align-items: center;user-select: none;cursor: pointer"
                    @click="isRemember = !isRemember"
                >
                    <o-input type="checkbox" :checked="isRemember" />
                    <div style="margin-left: 10px;">勾选同意《保密协议》</div>
                </div>
            </div>
            <o-form-item style="margin-bottom: 10px;">
                <o-button
                    type="primary"
                    html-type="submit"
                    style="width: 100%"
                >
                    注册
                </o-button>
            </o-form-item>
        </o-form>
        <div class="oil-register-footer">
            <a :style="{color}" @click="$emit('onLogin')">已有账号，立即登录</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register',
    data() {
        return {
            form: null,
            veryCode: null,
            isRemember: false
        };
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
                console.log('ininin: ', values);
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            });
        },
        getVeryCode() {
            const veryCode = Math.random().toString(36).substr(2, 4);
            this.veryCode = veryCode.toUpperCase();
        }
    },
};
</script>

<style lang="less">
    .oil-register{
        &-title{
            margin-bottom: 15px;
            font-family: 'SourceHanSansCN-Normal', 'Source Han Sans CN Normal', 'Source Han Sans CN', sans-serif;
            font-weight: 400;
            font-style: normal;
            font-size: 14px;
            color: #555555;
        }
        .ant-btn {
            width: 100%;
        }
        .ant-input-group-addon{
            background-color: #FFF;
            border-left: none !important;
        }
        .oil-input, .ant-btn {
            height: 60px;
            input, .ant-input {
                height: 60px;
                padding-left: 50px;
            }
        }
        .oil-form-item{
            margin-bottom: 15px;
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
            display: flex;
            align-items: center;
            .ant-input:hover{
                border-color: transparent;
            }
            font-family: 'SourceHanSansCN-Normal', 'Source Han Sans CN Normal', 'Source Han Sans CN', sans-serif;
            font-weight: 400;
            font-style: normal;
            font-size: 12px;
            color: #AAAAAA;
        }
        .oil-very-line{
             .oil-input {
                input, .ant-input {
                    border-right: none;
                    padding-left: 11px;
                    &:focus{
                        border-right: 1px solid #d9d9d9;
                    }
                }
            }
        }

        &-footer{
            display: flex;
            justify-content: center;
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