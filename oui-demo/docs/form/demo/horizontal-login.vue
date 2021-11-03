<cn>
#### 内联登录栏
水平登录栏，常用在顶部导航栏中。
</cn>

<us>
#### Inline Login Form
Inline login form is often used in navigation bar.
</us>

<template>
  <o-form layout="inline" :form="form" @submit="handleSubmit">
    <o-form-item :validate-status="userNameError() ? 'error' : ''" :help="userNameError() || ''">
      <o-input
        v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
        placeholder="Username"
      >
        <o-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
      </o-input>
    </o-form-item>
    <o-form-item :validate-status="passwordError() ? 'error' : ''" :help="passwordError() || ''">
      <o-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
        type="password"
        placeholder="Password"
      >
        <o-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
      </o-input>
    </o-form-item>
    <o-form-item>
      <o-button type="primary" html-type="submit" :disabled="hasErrors(form.getFieldsError())">
        Log in
      </o-button>
    </o-form-item>
  </o-form>
</template>

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
export default {
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: 'horizontal_login' }),
    };
  },
  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields();
    });
  },
  methods: {
    // Only show error after a field is touched.
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('userName') && getFieldError('userName');
    },
    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('password') && getFieldError('password');
    },
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
