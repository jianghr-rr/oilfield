<template>
    <div class="container">
        <md :cn="md.cn" :us="md.us" />
        <basic-md />
        <step1-md />
        <step2-md />
        <step3-md />
    </div>
</template>

<script>

import BasicMd from './basic.md';
import Step1Md from './step1.md';
import Step2Md from './step2.md';
import Step3Md from './step3.md';

const md = {
  cn: `# StepForm 分布表单
          将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。
          ## 代码演示`,
  us: `# StepForm
          Divide a long or unfamiliar form task into several steps to guide the user to complete it.
`,
};

export default {
    name: 'StepFormPage',
    components: {
        BasicMd,
        Step1Md,
        Step2Md,
        Step3Md
    },
    data() {
        return {
            md
        }
    }
}
</script>

<style lang="less" scoped>

</style>
