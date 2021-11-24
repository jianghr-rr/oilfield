<template>
  <div class="wrapper">
    <div class="page-title">
      <span v-if="current === 0 && firstStep === 2">一次样品交接列表</span>
      <span v-else-if="current === 1 && secondStep === 3">二次样品交接列表</span>
       <span v-else-if="current === 2 && thirdStep === 4">三次样品交接列表</span>
      <span v-else>分步表单</span>
    </div>
    <p v-if="showSubTitle" class="subtitle">将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。</p>
    <o-card class="card" :bordered="false">
      <first-step v-if="current === 0" :firstStep.sync="firstStep" @nextStep="current++" />
      <second-step v-else-if="current === 1" :secondStep.sync="secondStep" @nextStep="current++" />
      <third-step v-else :thirdStep.sync="thirdStep"></third-step>
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
  data() {
    return {
      current: 0,
      firstStep: 0,
      secondStep: 0,
      thirdStep: 0
    }
  },
  computed: {
    showSubTitle() {
      return this.current === 0 && this.firstStep !== 2
        || this.current === 1 && this.secondStep !== 3
        || this.current === 2 && this.thirdStep !== 4;
    }
  },
  methods: {
    finish() {
      // TODO
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  .page-title {
    font-size: 24px;
    line-height: 24px;
    font-family: "Source Han Sans CN";
    font-weight: 400;
    color: @primary-color;
    margin-bottom: 40px;
  }
  .subtitle {
    margin-bottom: 40px;
    font-size: 14px;
    line-height: 14px;
    font-family: "Source Han Sans CN";
    font-weight: 400;
    color: @title-color;
  }
  .card {
    padding-bottom: 50px;
  }
}
</style>