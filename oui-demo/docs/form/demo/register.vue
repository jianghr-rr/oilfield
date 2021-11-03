<cn>
#### 注册新用户
用户填写必须的信息以注册新用户。
</cn>

<us>
#### Registration
Fill in this form to create a new account for you.
</us>

<template>
  <o-form :form="form" @submit="handleSubmit">
    <o-form-item v-bind="formItemLayout" label="E-mail">
      <o-input
        v-decorator="[
          'email',
          {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          },
        ]"
      />
    </o-form-item>
    <o-form-item v-bind="formItemLayout" label="Password" has-feedback>
      <o-input
        v-decorator="[
          'password',
          {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: validateToNextPassword,
              },
            ],
          },
        ]"
        type="password"
      />
    </o-form-item>
    <o-form-item v-bind="formItemLayout" label="Confirm Password" has-feedback>
      <o-input
        v-decorator="[
          'confirm',
          {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: compareToFirstPassword,
              },
            ],
          },
        ]"
        type="password"
        @blur="handleConfirmBlur"
      />
    </o-form-item>
    <o-form-item v-bind="formItemLayout">
      <span slot="label">
        Nickname&nbsp;
        <o-tooltip title="What do you want others to call you?">
          <o-icon type="question-circle-o" />
        </o-tooltip>
      </span>
      <o-input
        v-decorator="[
          'nickname',
          {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          },
        ]"
      />
    </o-form-item>
    <o-form-item v-bind="formItemLayout" label="Habitual Residence">
      <o-cascader
        v-decorator="[
          'residence',
          {
            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
            rules: [
              { type: 'array', required: true, message: 'Please select your habitual residence!' },
            ],
          },
        ]"
        :options="residences"
      />
    </o-form-item>
    <o-form-item v-bind="formItemLayout" label="Phone Number">
      <o-input
        v-decorator="[
          'phone',
          {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          },
        ]"
        style="width: 100%"
      >
        <o-select
          slot="addonBefore"
          v-decorator="['prefix', { initialValue: '86' }]"
          style="width: 70px"
        >
          <o-select-option value="86">
            +86
          </o-select-option>
          <o-select-option value="87">
            +87
          </o-select-option>
        </o-select>
      </o-input>
    </o-form-item>
    <o-form-item v-bind="formItemLayout" label="Website">
      <o-auto-complete
        v-decorator="['website', { rules: [{ required: true, message: 'Please input website!' }] }]"
        placeholder="website"
        @change="handleWebsiteChange"
      >
        <template slot="dataSource">
          <o-select-option v-for="website in autoCompleteResult" :key="website">
            {{ website }}
          </o-select-option>
        </template>
        <o-input />
      </o-auto-complete>
    </o-form-item>
    <o-form-item
      v-bind="formItemLayout"
      label="Captcha"
      extra="We must make sure that your are a human."
    >
      <o-row :gutter="8">
        <o-col :span="12">
          <o-input
            v-decorator="[
              'captcha',
              { rules: [{ required: true, message: 'Please input the captcha you got!' }] },
            ]"
          />
        </o-col>
        <o-col :span="12">
          <o-button>Get captcha</o-button>
        </o-col>
      </o-row>
    </o-form-item>
    <o-form-item v-bind="tailFormItemLayout">
      <o-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
        I have read the
        <a href="">
          agreement
        </a>
      </o-checkbox>
    </o-form-item>
    <o-form-item v-bind="tailFormItemLayout">
      <o-button type="primary" html-type="submit">
        Register
      </o-button>
    </o-form-item>
  </o-form>
</template>

<script>
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

export default {
  data() {
    return {
      confirmDirty: false,
      residences,
      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      },
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'register' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    },
    handleWebsiteChange(value) {
      let autoCompleteResult;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
      }
      this.autoCompleteResult = autoCompleteResult;
    },
  },
};
</script>
