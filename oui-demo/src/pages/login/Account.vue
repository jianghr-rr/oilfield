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
                    <o-icon slot="prefix" type="user" class="icon" />
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
                    <o-icon slot="prefix" type="lock" class="icon" />
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
                    </o-form-item>
                </div>
                <div class="oil-very-item" @click="getVeryCode">
                    {{veryCode}}
                </div>
            </div>
            <div class="oil-form-item">
                <o-checkbox @change="handleRemember">记住登陆状态</o-checkbox>
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
            <div @click="$emit('onMessage')">
                <a :style="{color}">忘记登陆密码</a>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
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

<style lang="less" scoped>
    @import './index.less';
</style>