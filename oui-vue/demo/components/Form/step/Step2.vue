<template>
  <div>
    <o-form style="max-width: 500px; margin: 40px auto 0;">
      <o-alert
        :closable="true"
        message="确认转账后，资金将直接打入对方账户，无法退回。"
        style="margin-bottom: 24px;"
      />
      <o-form-item
        label="付款账户"
        :labelCol="{span: 7}"
        :wrapperCol="{span: 17}"
        class="stepFormText"
      >
        ant-design@alipay.com
      </o-form-item>
      <o-form-item
        label="收款账户"
        :labelCol="{span: 7}"
        :wrapperCol="{span: 17}"
        class="stepFormText"
      >
        test@example.com
      </o-form-item>
      <o-form-item
        :label="$t('collectionName')"
        :labelCol="{span: 7}"
        :wrapperCol="{span: 17}"
        class="stepFormText"
      >
        Alex
      </o-form-item>
      <o-form-item
        :label="$t('transferAmount')"
        :labelCol="{span: 7}"
        :wrapperCol="{span: 17}"
        class="stepFormText"
      >
        ￥ 5,000.00
      </o-form-item>
      <o-form-item :wrapperCol="{span: 17, offset: 7}">
        <o-button :loading="loading" type="primary" @click="nextStep">{{$t('submit')}}</o-button>
        <o-button style="margin-left: 8px" @click="prevStep">{{$t('preStep')}}</o-button>
      </o-form-item>
    </o-form>
  </div>
</template>

<script>
export default {
  name: 'Step2',
//   i18n: require('./i18n'),
  data () {
    return {
      loading: false
    }
  },
  methods: {
    nextStep () {
      let _this = this
      _this.loading = true
      setTimeout(function () {
        _this.$emit('nextStep')
      }, 1500)
    },
    prevStep () {
      this.$emit('prevStep')
    }
  }
}
</script>

<style lang="less" scoped>
  .stepFormText {
    margin-bottom: 24px;
    :global {
      .ant-form-item-label,
      .ant-form-item-control {
        line-height: 22px;
      }
    }
  }
</style>
