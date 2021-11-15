<cn>
#### 自定义内容
自定义内容可以是任意的，例如表格或者表单。
</cn>

<us>
#### Information modal dialog
In the various types of information modal dialog, only one button to close dialog is provided.
</us>

```vue
<template>
  <div>
    <o-button type="primary" @click="showModal">
      打开嵌套表格的对话框
    </o-button>
    <o-button type="primary" @click="showModal2">
      打开嵌套表单的对话框
    </o-button>
  </div>
  <o-modal v-model="visible" title="修改日志" @ok="handleOk">
    <o-table :dataSource="dataSource" :columns="columns" />

    <template slot="footer">
      <o-button key="back" @click="handleCancel">
        取消
      </o-button>
      <o-button key="submit" type="primary" :loading="loading" @click="handleOk">
        确定
      </o-button>
    </template>
  </o-modal>
  <o-modal v-model="visible2" title="活动申请" @ok="handleOk2">
    <o-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <o-form-item label="活动名称：">
        <o-input />
      </o-form-item>
      <o-form-item label="活动区域：">
        <o-select placeholder="请选择活动区域">
          <o-select-option value="shanghai">区域 1</o-select-option>
          <o-select-option value="beijing">区域 2</o-select-option>
        </o-select>
      </o-form-item>
    </o-form>
    <template slot="footer">
      <o-button key="back" @click="handleCancel2">
        取消
      </o-button>
      <o-button key="submit" type="primary" :loading="loading" @click="handleOk2">
        确定
      </o-button>
    </template>
  </o-modal>
</template>
<script>
import { Modal } from 'ant-design-vue';
export default {
  data() {
    return {
      visible: false,
      visible2: false,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      dataSource: [
        {
          key: '1',
          name: '江小新',
          date: '2021-11-03',
          address: '组件库设计-通用',
        },
        {
          key: '2',
          name: '江小新',
          date: '2021-11-04',
          address: '组件库设计-通用',
        },
        {
          key: '3',
          name: '江小新',
          date: '2021-11-05',
          address: '组件库设计-通用',
        },
        {
          key: '4',
          name: '江小新',
          date: '2021-11-06',
          address: '组件库设计-通用',
        },
      ],
      columns: [
        {
          title: '日期',
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '修改内容',
          dataIndex: 'address',
          key: 'address',
        },
      ],
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
    handleCancel(e) {
      console.log(e);
      this.visible = false;
    },
    showModal2() {
      this.visible2 = true;
    },
    handleOk2(e) {
      console.log(e);
      this.visible2 = false;
    },
    handleCancel2(e) {
      console.log(e);
      this.visible2 = false;
    },
  },
};
</script>
```
