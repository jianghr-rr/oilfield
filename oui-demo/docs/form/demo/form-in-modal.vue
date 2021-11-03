<cn>
#### 弹出层中的新建表单
当用户访问一个展示了某个列表的页面，想新建一项但又不想跳转页面时，可以用 Modal 弹出一个表单，用户填写必要信息后创建新的项。
</cn>

<us>
#### Form in Modal to Create
When user visit a page with a list of items, and want to create a new item. The page can popup a form in Modal, then let user fill in the form to create an item.
</us>

<template>
  <div>
    <o-button type="primary" @click="showModal">
      New Collection
    </o-button>
    <collection-create-form
      ref="collectionForm"
      :visible="visible"
      @cancel="handleCancel"
      @create="handleCreate"
    />
  </div>
</template>

<script>
const CollectionCreateForm = {
  props: ['visible'],
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'form_in_modal' });
  },
  template: `
    <o-modal
      :visible="visible"
      title='Create a new collection'
      okText='Create'
      @cancel="() => { $emit('cancel') }"
      @ok="() => { $emit('create') }"
    >
      <o-form layout='vertical' :form="form">
        <o-form-item label='Title'>
          <o-input
            v-decorator="[
              'title',
              {
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              }
            ]"
          />
        </o-form-item>
        <o-form-item label='Description'>
          <o-input
            type='textarea'
            v-decorator="['description']"
          />
        </o-form-item>
        <o-form-item class='collection-create-form_last-form-item'>
          <o-radio-group
            v-decorator="[
              'modifier',
              {
                initialValue: 'private',
              }
            ]"
          >
              <o-radio value='public'>Public</o-radio>
              <o-radio value='private'>Private</o-radio>
            </o-radio-group>
        </o-form-item>
      </o-form>
    </o-modal>
  `,
};

export default {
  components: { CollectionCreateForm },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleCancel() {
      this.visible = false;
    },
    handleCreate() {
      const form = this.$refs.collectionForm.form;
      form.validateFields((err, values) => {
        if (err) {
          return;
        }
        console.log('Received values of form: ', values);
        form.resetFields();
        this.visible = false;
      });
    },
  },
};
</script>
