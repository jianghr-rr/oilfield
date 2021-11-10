<template>
  <div>
    <p>
       将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。
    </p>
    <o-card :hoverable="true">
      <o-steps class="steps" :current="current">
        <o-step title="样品交接" />
        <o-step title="确认交接内容" />
        <o-step title="完成" />
      </o-steps>
      <div class="content">
        <step1 v-if="current === 0" :values.sync="step1Values" @nextStep="nextStep"></step1>
        <step2 v-if="current === 1" :values="step1Values" @nextStep="nextStep" @prevStep="prevStep"></step2>
        <step3 v-if="current === 2" :values="step1Values" @prevStep="prevStep" @finish="finish"></step3>
      </div>
    </o-card>
  </div>

</template>

<script>
import Step1 from './components/Step1.vue';
import Step2 from './components/Step2.vue';
import Step3 from './components/Step3.vue';

export default {
    name: 'StepForm',
    components: {
        Step1,
        Step2,
        Step3
    },
    data () {
        return {
            current: 0,
            step1Values: null
        }
    },
    methods: {
        nextStep () {
            if (this.current < 2) {
                this.current += 1;
            }
        },
        prevStep () {
            if (this.current > 0) {
                this.current -= 1
            }
        },
        finish () {
            this.current = 0
        }
    }
}
</script>

<style lang="less" scoped>
  .steps{
    max-width: 950px;
    margin: 16px auto;
  }
  p{
      margin: 10px 0 20px;
  }
</style>