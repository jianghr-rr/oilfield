<cn>
#### 登录框
普通的登录框，可以容纳更多的元素。
</cn>

<us>
#### Login Form
Normal login form which can contain more elements.
</us>

<template>
  <o-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <o-form-item>
      <o-input
        v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
        placeholder="Username"
      >
        <o-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </o-input>
    </o-form-item>
    <o-form-item>
      <o-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
        type="password"
        placeholder="Password"
      >
        <o-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </o-input>
    </o-form-item>
    <o-form-item>
      <o-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
      >
        Remember me
      </o-checkbox>
      <a class="login-form-forgot" href="">
        Forgot password
      </a>
      <o-button type="primary" html-type="submit" class="login-form-button">
        Log in
      </o-button>
      Or
      <a href="">
        register now!
      </a>
    </o-form-item>
  </o-form>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
  },
};
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
