<template>
  <div>
    <template v-if="current < 4">
      <o-steps class="steps" :current="current">
        <o-step title="样品交接" />
        <o-step title="样品交接" />
        <o-step title="三次交接" />
        <o-step title="完成" />
      </o-steps>
      <div class="content">
        <step1 v-if="current === 2" :values.sync="step1Values" @nextStep="current++"></step1>
        <step2 v-if="current === 3" :values="step1Values" @nextStep="current++"></step2>
      </div>
    </template>
    <template v-else>
      <detail @finish="finish" @preStep="current--" />
    </template>
  </div>
</template>

<script>
import Step1 from './Step1';
import Step2 from './Step2';
import Detail from './Detail';

export default {
  name: 'StepForm',
  components: {
    Step1,
    Step2,
    Detail
  },
  data() {
    return {
      current: 2,
      step1Values: null
    }
  },
  watch: {
    current(val) {
      this.$emit("update:thirdStep", val);
    }
  },
  methods: {
    finish(values) {
      this.$emit('nextStep', values)
    }
  }
}
</script>