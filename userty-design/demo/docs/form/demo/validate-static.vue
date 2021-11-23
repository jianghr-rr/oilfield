<cn>
#### 自定义校验123123
我们提供了 `validateStatus` `help` `hasFeedback` 等属性，你可以不需要使用 `Form.create` 和 `getFieldDecorator`，自己定义校验的时机和内容。
1. `validateStatus`: 校验状态，可选 'success', 'warning', 'error', 'validating'。
2. `hasFeedback`：用于给输入框添加反馈图标。
3. `help`：设置校验文案。
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
    <o-form-item
      label="Fail"
      validate-status="error"
      help="Should be combination of numbers & alphabets"
    >
      <o-input id="error" placeholder="unavailable choice" />
    </o-form-item>
    <o-form-item label="Warning" validate-status="warning">
      <o-input id="warning" placeholder="Warning" />
    </o-form-item>
    <o-form-item
      label="Validating"
      has-feedback
      validate-status="validating"
      help="The information is being validated..."
    >
      <o-input id="validating" placeholder="I'm the content is being validated" />
    </o-form-item>
    <o-form-item label="Success" has-feedback validate-status="success">
      <o-input id="success" placeholder="I'm the content" />
    </o-form-item>
    <o-form-item label="Warning" has-feedback validate-status="warning">
      <o-input id="warning2" placeholder="Warning" />
    </o-form-item>
    <o-form-item
      label="Fail"
      has-feedback
      validate-status="error"
      help="Should be combination of numbers & alphabets"
    >
      <o-input id="error2" placeholder="unavailable choice" />
    </o-form-item>
    <o-form-item label="Success" has-feedback validate-status="success">
      <o-date-picker style="width: 100%" />
    </o-form-item>
    <o-form-item label="Warning" has-feedback validate-status="warning">
      <o-time-picker style="width: 100%" />
    </o-form-item>
    <!-- <o-form-item label="Error" has-feedback validate-status="error">
      <a-select default-value="1">
        <a-select-option value="1">
          Option 1
        </a-select-option>
        <a-select-option value="2">
          Option 2
        </a-select-option>
        <a-select-option value="3">
          Option 3
        </a-select-option>
      </a-select>
    </o-form-item> -->
    <!-- <o-form-item
      label="Validating"
      has-feedback
      validate-status="validating"
      help="The information is being validated..."
    >
      <a-cascader :default-value="['1']" :options="[]" />
    </o-form-item> -->
    <o-form-item label="inline" style="margin-bottom:0;">
      <o-form-item
        validate-status="error"
        help="Please select the correct date"
        :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }"
      >
        <o-date-picker style="width: 100%" />
      </o-form-item>
      <span :style="{ display: 'inline-block', width: '24px', textAlign: 'center' }">
        -
      </span>
      <o-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
        <o-date-picker style="width: 100%" />
      </o-form-item>
    </o-form-item>
    <o-form-item label="Success" has-feedback validate-status="success">
      <o-input-number style="width: 100%" />
    </o-form-item>
    <o-form-item label="Success" has-feedback validate-status="success">
      <o-input allow-clear placeholder="with allowClear" />
    </o-form-item>

    <o-form-item label="Warning" has-feedback validate-status="warning">
      <o-input-password placeholder="with input password" />
    </o-form-item>

    <o-form-item label="Error" has-feedback validate-status="error">
      <o-input-password allow-clear placeholder="with input password and allowClear" />
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
