<template>
  <div>
    <p>
       将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。
    </p>
    <o-card class="card">
        <first-step v-if="current === 0" @nextStep="current++" />
        <second-step v-else-if="current === 1" @nextStep="current++" />
        <third-step v-else></third-step>
    </o-card>
  </div>

</template>

<script>
import FirstStep from './components/First';
import SecondStep from './components/Second';
import ThirdStep from './components/Third';

export default {
    name: 'StepForm',
    components: {
        FirstStep,
        SecondStep,
        ThirdStep
    },
    data () {
        return {
            current: 0,
        }
    },
    methods: {
        finish () {
            // TODO
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
  .card{
    padding-bottom: 50px;
  }
</style>