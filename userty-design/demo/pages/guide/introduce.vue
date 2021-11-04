<template>
  <div :style="{'--color': themmeColor}">
    <div class="toc-affix">
      <a-anchor>
        <a-anchor-link href="#a" title="Xinjiang Userty Design 是什么" />
        <a-anchor-link href="#b" title="XJUD 的目标" />
      </a-anchor>
    </div>

    <div class="h1-title">介绍</div>
    <div id="a" class="h2-title">Xinjiang Userty Design 是什么</div>
    <div class="text">组件库设计本身的提出建立在用户体验的提升上。用户体验是用户在使用产品的过程中所产生的最主观的感受，其中包括情感，行为，认知，心里和生理上的反应。“ XinJiang Userty Design ”中“ Userty ”取用英文“ User （ 用户）”与英文“ typical（典型、特有的）”进行合成，同时采用“Userty”与“油田”的谐音设计，整体意为“新疆油田专属用户设计”。旨在本组件库的内容下，为新疆油田旗下的各个系统及应用，提供连接产品交互、设计、前端开发环节高效统一流畅的设计工具，从而提升各个系统及应用的基础用户体验。</div>
    <div class="img-wrap"><img class="img" :src="welcome" /></div>
    <div id="b" class="h2-title">XJUD 的目标</div>
    <div class="text">组件库本次目标：基于统一视觉、优化信息架构、样式、统一色值、字体等，一致化用户行为、复用设计模式、统一概念；以达到由基于设计原则导向型发展为以用户为中心的设计。将组件分为通用组件和业务组件，从而改变组件混用导致设计模式和代码复用率低，组件资源很难有效进行沉淀等情况。基于各个厂处的UI设计需求背景调研，最终成型PC端组件库的思路，以VUE为基础开发组件库，打通设计交互与技术的链接，实现设计与技术的同步。</div>
  </div>
</template>
<script>
import welcome from '../../assets/guide/welcome.png';
export default {
  data() {
    return {
      welcome,
      themmeColor: this.$store.getters.color,
    };
  },
  computed: {
      getColor() {
        return this.$store.getters.color;
      },
  },
  watch: {
      getColor(val) {
        this.themmeColor = val;
      },
  },
};
</script>
<style lang="less" scope>
@import '../default.less';
.h1-title {
  .h1-title-d(var(--color));
}
.h2-title {
  .h2-title-d(var(--color));
}
.text {
  .text-d();
}
.img-wrap {
  text-align: center;
}
</style>
