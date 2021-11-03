<cn>
#### 校验其他组件
以上演示没有出现的表单控件对应的校验演示。
</cn>

<us>
#### Other Form Controls
Demonstration of validation configuration for form controls which are not shown in the demos above.
</us>

<template>
  <o-form
    id="components-form-demo-validate-other"
    :form="form"
    v-bind="formItemLayout"
    @submit="handleSubmit"
  >
    <o-form-item label="Plain Text">
      <span class="ant-form-text">
        China
      </span>
    </o-form-item>
    <o-form-item label="Select" has-feedback>
      <o-select
        v-decorator="[
          'select',
          { rules: [{ required: true, message: 'Please select your country!' }] },
        ]"
        placeholder="Please select a country"
      >
        <o-select-option value="china">
          China
        </o-select-option>
        <o-select-option value="usa">
          U.S.A
        </o-select-option>
      </o-select>
    </o-form-item>

    <o-form-item label="Select[multiple]">
      <o-select
        v-decorator="[
          'select-multiple',
          {
            rules: [
              { required: true, message: 'Please select your favourite colors!', type: 'array' },
            ],
          },
        ]"
        mode="multiple"
        placeholder="Please select favourite colors"
      >
        <o-select-option value="red">
          Red
        </o-select-option>
        <o-select-option value="green">
          Green
        </o-select-option>
        <o-select-option value="blue">
          Blue
        </o-select-option>
      </o-select>
    </o-form-item>

    <o-form-item label="InputNumber">
      <o-input-number v-decorator="['input-number', { initialValue: 3 }]" :min="1" :max="10" />
      <span class="ant-form-text">
        machines
      </span>
    </o-form-item>

    <o-form-item label="Switch">
      <o-switch v-decorator="['switch', { valuePropName: 'checked' }]" />
    </o-form-item>

    <o-form-item label="Slider">
      <o-slider
        v-decorator="['slider']"
        :marks="{ 0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F' }"
      />
    </o-form-item>

    <o-form-item label="Radio.Group">
      <o-radio-group v-decorator="['radio-group']">
        <o-radio value="a">
          item 1
        </o-radio>
        <o-radio value="b">
          item 2
        </o-radio>
        <o-radio value="c">
          item 3
        </o-radio>
      </o-radio-group>
    </o-form-item>

    <o-form-item label="Radio.Button">
      <o-radio-group v-decorator="['radio-button']">
        <o-radio-button value="a">
          item 1
        </o-radio-button>
        <o-radio-button value="b">
          item 2
        </o-radio-button>
        <o-radio-button value="c">
          item 3
        </o-radio-button>
      </o-radio-group>
    </o-form-item>

    <o-form-item label="Checkbox.Group">
      <o-checkbox-group
        v-decorator="['checkbox-group', { initialValue: ['A', 'B'] }]"
        style="width: 100%;"
      >
        <o-row>
          <o-col :span="8">
            <o-checkbox value="A">
              A
            </o-checkbox>
          </o-col>
          <o-col :span="8">
            <o-checkbox disabled value="B">
              B
            </o-checkbox>
          </o-col>
          <o-col :span="8">
            <o-checkbox value="C">
              C
            </o-checkbox>
          </o-col>
          <o-col :span="8">
            <o-checkbox value="D">
              D
            </o-checkbox>
          </o-col>
          <o-col :span="8">
            <o-checkbox value="E">
              E
            </o-checkbox>
          </o-col>
        </o-row>
      </o-checkbox-group>
    </o-form-item>

    <o-form-item label="Rate">
      <o-rate v-decorator="['rate', { initialValue: 3.5 }]" allow-half />
    </o-form-item>

    <o-form-item label="Upload" extra="longgggggggggggggggggggggggggggggggggg">
      <o-upload
        v-decorator="[
          'upload',
          {
            valuePropName: 'fileList',
            getValueFromEvent: normFile,
          },
        ]"
        name="logo"
        action="/upload.do"
        list-type="picture"
      >
        <o-button> <o-icon type="upload" /> Click to upload </o-button>
      </o-upload>
    </o-form-item>

    <o-form-item label="Dragger">
      <div class="dropbox">
        <o-upload-dragger
          v-decorator="[
            'dragger',
            {
              valuePropName: 'fileList',
              getValueFromEvent: normFile,
            },
          ]"
          name="files"
          action="/upload.do"
        >
          <p class="ant-upload-drag-icon">
            <o-icon type="inbox" />
          </p>
          <p class="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p class="ant-upload-hint">
            Support for a single or bulk upload.
          </p>
        </o-upload-dragger>
      </div>
    </o-form-item>

    <o-form-item :wrapper-col="{ span: 12, offset: 6 }">
      <o-button type="primary" html-type="submit">
        Submit
      </o-button>
    </o-form-item>
  </o-form>
</template>

<script>
export default {
  data: () => ({
    formItemLayout: {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    },
  }),
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'validate_other' });
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
    normFile(e) {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    },
  },
};
</script>
<style>
#components-form-demo-validate-other .dropbox {
  height: 180px;
  line-height: 1.5;
}
</style>
