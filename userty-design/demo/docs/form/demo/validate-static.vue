<cn>
#### 自定义校验
这个例子中展示了如何使用自定义功能，`hasFeedback`：用于给输入框添加反馈图标，`help`：设置校验文案。
</cn>

<us>
#### Customized Validation
We provide properties like `validateStatus` `help` `hasFeedback` to customize your own validate status and message, without using `Form.create` and `getFieldDecorator`.
1. `validateStatus`: validate status of form components which could be 'success', 'warning', 'error', 'validating'.
2. `hasFeedback`: display feed icon of input control
3. `help`: display validate message.
</us>

<template>
  <o-form :label-col="labelCol" :wrapper-col="wrapperCol">

    <o-form-item label="密码" has-feedback validate-status="error">
      <o-input-password placeholder="请输入密码" />
    </o-form-item>

    <o-form-item label="确认密码" has-feedback validate-status="error">
      <o-input-password allow-clear placeholder="请再次输入密码" />
    </o-form-item>
    
    <o-form-item label="年龄" >
      <o-input-number />
    </o-form-item>
    <o-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <o-button style="margin: 0 20px 0 0">
        取消
      </o-button>
      <o-button type="primary" html-type="submit">
        确定
      </o-button>
    </o-form-item>
  </o-form>
</template>
<script>
export default {
  data() {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };
  },
};
</script>
