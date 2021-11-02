<cn>
#### 表单布局
表单有三种布局。
</cn>

<us>
#### Form Layout
There are three layout for form: `horizontal`, `vertical`, `inline`.
</us>

<template>
  <o-form :layout="formLayout">
    <o-form-item
      label="Form Layout"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
    >
      <a-radio-group default-value="horizontal" @change="handleFormLayoutChange">
        <a-radio-button value="horizontal">
          Horizontal
        </a-radio-button>
        <a-radio-button value="vertical">
          Vertical
        </a-radio-button>
        <a-radio-button value="inline">
          Inline
        </a-radio-button>
      </a-radio-group>
    </o-form-item>
    <o-form-item
      label="Field A"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
    >
      <o-input placeholder="input placeholder" />
    </o-form-item>
    <o-form-item
      label="Field B"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
    >
      <o-input placeholder="input placeholder" />
    </o-form-item>
    <o-form-item :wrapper-col="buttonItemLayout.wrapperCol">
      <o-button type="primary">
        Submit
      </o-button>
    </o-form-item>
  </o-form>
</template>

<script>
export default {
  data() {
    return {
      formLayout: 'horizontal',
    };
  },
  computed: {
    formItemLayout() {
      const { formLayout } = this;
      return formLayout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : {};
    },
    buttonItemLayout() {
      const { formLayout } = this;
      return formLayout === 'horizontal'
        ? {
            wrapperCol: { span: 14, offset: 4 },
          }
        : {};
    },
  },
  methods: {
    handleFormLayoutChange(e) {
      this.formLayout = e.target.value;
    },
  },
};
</script>
