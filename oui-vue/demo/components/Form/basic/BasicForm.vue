<template>
  <o-form>
    <o-form-item
      :label="$t('title')"
      :labelCol="{span: 7}"
      :wrapperCol="{span: 10}"
    >
      <o-input :placeholder="$t('titleInput')" />
    </o-form-item>
    <o-form-item
      :label="$t('date')"
      :labelCol="{span: 7}"
      :wrapperCol="{span: 10}"
    >
      <o-range-picker style="width: 100%" />
    </o-form-item>
    <o-form-item
      :label="$t('describe')"
      :labelCol="{span: 7}"
      :wrapperCol="{span: 10}"
    >
      <o-textarea rows="4" :placeholder="$t('describeInput')"/>
    </o-form-item>
    <o-form-item
      :label="$t('metrics')"
      :labelCol="{span: 7}"
      :wrapperCol="{span: 10}"
    >
      <o-textarea rows="4" :placeholder="$t('metricsInput')"/>
    </o-form-item>
    <o-form-item
      :label="$t('customer')"
      :labelCol="{span: 7}"
      :wrapperCol="{span: 10}"
      :required="false"
    >
      <o-input :placeholder="$t('customerInput')"/>
    </o-form-item>
    <o-form-item
      :label="$t('critics')"
      :labelCol="{span: 7}"
      :wrapperCol="{span: 10}"
      :required="false"
    >
      <o-input :placeholder="$t('criticsInput')"/>
    </o-form-item>
    <o-form-item
      :label="$t('weight')"
      :labelCol="{span: 7}"
      :wrapperCol="{span: 10}"
      :required="false"
    >
      <o-input-number :min="0" :max="100"/>
      <span>%</span>
    </o-form-item>
    <o-form-item
      :label="$t('disclosure')"
      :labelCol="{span: 7}"
      :wrapperCol="{span: 10}"
      :required="false"
      :help="$t('disclosureDesc')"
    >
      <o-radio-group v-model="value">
        <o-radio :value="1">{{$t('public')}}</o-radio>
        <o-radio :value="2">{{$t('partially')}}</o-radio>
        <o-radio :value="3">{{$t('private')}}</o-radio>
      </o-radio-group>
      <o-select mode="multiple" v-if="value === 2">
        <o-select-option value="4">{{$t('colleague1')}}</o-select-option>
        <o-select-option value="5">{{$t('colleague2')}}</o-select-option>
        <o-select-option value="6">{{$t('colleague3')}}</o-select-option>
      </o-select>
    </o-form-item>
    <o-form-item style="margin-top: 24px" :wrapperCol="{span: 10, offset: 7}">
      <o-button type="primary">{{$t('submit')}}</o-button>
      <o-button style="margin-left: 8px">{{$t('save')}}</o-button>
    </o-form-item>
  </o-form>
</template>

<script>
export default {
  name: 'BasicForm',
  i18n: require('./i18n'),
  data () {
    return {
      value: 1
    }
  },
  computed: {
    desc() {
      return this.$t('pageDesc')
    }
  }
}
</script>

<style scoped>

</style>
