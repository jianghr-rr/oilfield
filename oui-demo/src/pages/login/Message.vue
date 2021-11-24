<template>
    <div class="oil-account-login">
        <o-form :form="form" @submit="handleSubmit">
            <o-form-item>
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
                    :maxLength="20"
                    placeholder="请输入手机号码"
                />
            </o-form-item>
            <o-form-item class="oil-very-line">
                <o-input
                    class="oil-input"
                    v-decorator="[
                        'code',
                        {
                            rules: [
                                {required: true, message: '请输入短信验证码'}
                            ]
                        }
                    ]"
                    type="code"
                    :maxLength="20"
                    placeholder="请输入短信验证码"
                >
                    <span slot="addonAfter" style="user-select: none;cursor: pointer;" @click="handleGetVeryCode">
                        <span :style="{color}">{{tips}}</span>
                    </span>
                </o-input>
            </o-form-item>
            <o-form-item class="oil-very oil-form-item">
                <o-input
                    class="oil-input oil-very-item"
                    v-decorator="[
                        'verycode',
                        {
                            rules: [
                                {required: true, message: '请输入右侧校验码'},
                                {validator: (_rule, value, callback) => {
                                    if (!value) {
                                        callback();
                                    }
                                    if (value !== this.veryCode) {
                                        callback('验证码错误');
                                    }
                                    callback();
                                }}
                            ]
                        }
                    ]"
                    :maxLength="4"
                    placeholder="请输入右侧校验码"
                />
                <div class="oil-very-item" @click="getVeryCode">
                    {{veryCode}}
                </div>
            </o-form-item>
            <div class="oil-form-item">
                <o-checkbox @change="handleRemember">记住登录状态</o-checkbox>
            </div>
            <o-form-item>
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
                <span>还没有账号?</span>&nbsp;
                <a :style="{color}">立即注册</a>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import very from './very';

export default {
    name: 'Account',
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
            isRemember: false
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
        handleGetVeryCode() {
            this.$emit('onGetVeryCode');
            this.form.validateFields(['phone']).then(tel => {
                this.getVeryCd(tel);
            });
        },
        handleRemember(e) {
            const checked = e.target.checked;
            this.$emit('onRemember', checked);
        },
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields({force: true}, (err, values) => {
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
        handleVeryCode(_rule, value, callback) {
            if (!value) {
                callback();
            }
            if (value !== this.veryCode) {
                callback('验证码错误');
            }
            callback();
        }
    },
};
</script>

<style lang="less">
    @import './index.less';
</style>