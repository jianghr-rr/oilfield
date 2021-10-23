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
  <a-card :bordered="false">
    <a-steps class="steps" :current="current">
      <a-step title="样品交接" />
      <a-step title="二次交接" />
      <a-step title="完成" />
    </a-steps>
    <div class="content">
      <step1 v-if="current === 0" :values.sync="step1Values" @nextStep="nextStep"></step1>
      <step2 v-if="current === 1" :values="step1Values" @nextStep="nextStep" @prevStep="prevStep"></step2>
      <step3 v-if="current === 2" :values="step1Values" @prevStep="prevStep" @finish="finish"></step3>
    </div>
  </a-card>
</template>

<script>
import Step1 from '../../../components/Form/step/Step1.vue';
import Step2 from '../../../components/Form/step/Step2.vue';
import Step3 from '../../../components/Form/step/Step3.vue';

export default {
      name: 'StepForm',
      components: {Step1, Step2, Step3},
      data () {
      	return {
      		current: 0,
      		step1Values: null
      	}
      },
      computed: {
      	desc() {
      		return "将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。"
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
