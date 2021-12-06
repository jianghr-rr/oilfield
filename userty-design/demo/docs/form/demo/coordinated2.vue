<cn>
#### 表单验证
form组件提供了表单的验证的功能。
</cn>

<us>
#### Coordinated Controls
Use `setFieldsValue` to set other control's value programmaticly.
</us>

<template>
  <o-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
    <o-form-item label="活动名称">
      <o-input />
    </o-form-item>
    <o-form-item label="活动区域">
      <o-select
        placeholder="请选择你的区域"
        @change="handleSelectChange"
      >
        <o-select-option value="male">
          区域一
        </o-select-option>
        <o-select-option value="female">
          区域二
        </o-select-option>
      </o-select>
    </o-form-item>
    <o-form-item label="活动日期">
      <o-date-picker style="width: 100%" />
    </o-form-item>
    <o-form-item label="即时完成">
      <o-switch v-decorator="['switch', { valuePropName: 'checked' }]" />
    </o-form-item>
    <o-form-item label="活动类型">
      <o-checkbox-group
        style="width: 100%;"
      >
        <o-checkbox value="A">
          在线
        </o-checkbox>
        <o-checkbox value="A">
          离线
        </o-checkbox>
      </o-checkbox-group>
    </o-form-item>
    <o-form-item label="活动资源">
      <o-radio-group v-decorator="['radio-group']">
        <o-radio value="a">
          赞助
        </o-radio>
        <o-radio value="b">
          场地
        </o-radio>
      </o-radio-group>
    </o-form-item>
    <o-form-item label="活动形式" validate-status="warning">
      <o-input placeholder="请输入活动形式" />
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
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
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
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      });
    },
  },
};
</script>
