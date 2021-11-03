<cn>
#### 基础用法
</cn>

<us>
#### Useage
Step bar + custom content.
</us>

## 用例

```vue
<template>
  <o-card :bordered="false">
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
</template>

<script>
import Step1 from './Step1.vue';
import Step2 from './Step2.vue';
import Step3 from './Step3.vue';

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
        nextStep (values) {
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
</style>

```
