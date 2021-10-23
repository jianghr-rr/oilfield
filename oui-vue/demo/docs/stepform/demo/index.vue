<template>
    <div class="container">
        <md :cn="md.cn" :us="md.us" />
        <basic-md />
    </div>
</template>

<script>

import BasicMd from './basic.md';

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
        BasicMd
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
