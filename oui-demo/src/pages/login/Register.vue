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
                                {required: true, message: '请输入手机号码'},
                                {
                                    pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
                                    message: '请输入正确的手机号'
                                }
                            ]
                        }
                    ]"
                    :maxLength="11"
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
                    :maxLength="20"
                    placeholder="请输入短信验证码"
                >
                    <span slot="addonAfter" style="user-select: none;cursor: pointer;" @click="handleGetVeryCode">
                        <span :style="{color}">{{tips}}</span>
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
                                {required: true, message: '设置6-20位登陆密码'},
                                {min: 6, message: '设置6-20位登陆密码'},
                                {max: 20, message: '设置6-20位登陆密码'},
                                {validator: validateToNextPassword}
                            ]
                        }
                    ]"
                    :maxLength="20"
                    type="password"
                    placeholder="设置6-20位登陆密码"
                />
            </o-form-item>
             <o-form-item class="oil-form-item">
                <o-input
                    class="oil-input"
                    v-decorator="[
                        'confirm',
                        {
                            rules: [
                                {required: true, message: '再次请输入登录密码'},
                                {validator: compareToFirstPassword}
                            ]
                        }
                    ]"
                    type="password"
                    placeholder="再次请输入登录密码"
                    @blur="handleConfirmBlur"
                />
            </o-form-item>
            <div class="oil-form-item">
                <o-checkbox @change="isRemember = !isRemember">勾选同意《保密协议》</o-checkbox>
            </div>
            <o-form-item style="margin-bottom: 10px;">
                <o-button
                    type="primary"
                    html-type="submit"
                    style="width: 100%"
                    :disabled="!isRemember"
                    :loading="loading"
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
import {mapState} from 'vuex'
import very from './very';

export default {
    name: 'Register',
    mixins: [very],
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
            isRemember: false,
            confirmDirty: false
        };
    },
    computed: {
         ...mapState({
            color: state => state.setting.theme.color
        })
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
                if (!err) {
                    this.$emit('onRegister', values);
                }
            });
        },
        handleGetVeryCode() {
            this.$emit('onGetVeryCode');
            this.form.validateFields(['phone']).then(tel => {
                this.getVeryCd(tel);
            });
        },
        getVeryCode() {
            const veryCode = Math.random().toString(36).substr(2, 4);
            this.veryCode = veryCode.toUpperCase();
        },
        handleConfirmBlur(e) {
            const value = e.target.value;
            this.confirmDirty = this.confirmDirty || !!value;
        },
        compareToFirstPassword(_rule, value, callback) {
            const form = this.form;
            if (value && value !== form.getFieldValue('password')) {
                callback('请检查两次输入的密码是否正确');
            } else {
                callback();
            }
        },
        validateToNextPassword(_rule, value, callback) {
            const form = this.form;
            if (value && this.confirmDirty) {
                form.validateFields(['confirm'], { force: true });
            }
            callback();
        },
    },
};
</script>

<style lang="less">
    .oil-register{
        width: 316px;
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
            a {
                cursor: pointer;
                font-family: 'SourceHanSansCN-Normal', 'Source Han Sans CN Normal', 'Source Han Sans CN', sans-serif;
                font-weight: 400;
                font-style: normal;
                font-size: 12px;
                user-select: none;
            }
        }
       
    }
</style>