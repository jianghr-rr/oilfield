<template>
  <div :style="{'--color': themmeColor}">
    <div class="toc-affix">
      <a-anchor>
        <a-anchor-link href="#a" title="测试法则" />
        <a-anchor-link href="#b" title="实用性测试" />
        <a-anchor-link href="#b" title="黑白盒测试" />
      </a-anchor>
    </div>

    <div id="a" class="h1-title">测试法则</div>
    <div class="text">软件测试的首要目的就是提高软件的质量，也就是让用户对产品有更好的体验，保证软件的高质量。在开发过程中技术开发人员都是以顺向思维来写程序代码，很少有开发人员能够站在用户角度去思考，但测试人员不通，测试要以逆向思维来思考程序会在哪一步有问题，站在用户的角度进行测试，这样上线的产品将很符合用户的需求，用户使用时也比较顺手，增加用户体验感。不通的阶段也同样有不同的测试方法，需要酌情选择。</div>
    <div id="b" class="h2-title">实用性测试</div>
    <div class="text">实用性测试，又叫作为可用性测试、易用性测试。是一项通过用户的使用来评估产品是否满足用户需求的技术，由于它反应了用户的真实使用经验，在用户体验中扮演了及其重要的一环。也就是说，实用性测试是指让用户使用产品（服务）的设计原型或者成品，通过观察，记录和分析用户的行为和感受，以改善产品（服务）使其更加贴近用户习惯。可结合用户旅程地图分析每个阶段的体验， 包括行为、感受（痛点和满意点）、思考想法。产品设计出来，大都可用，但是否贴近用户，实用和易用是测试的主要目的。它适用于产品(服务)前期设计开发，中期改进和后期维护完善的各个阶段，是用户中心设计的思想的重要体现。</div>
    <div id="c" class="h2-title">黑白盒测试</div>
    <div class="text">黑盒测试（black-box testing），也称黑箱测试，是软件测试方法，测试应用程序的功能，而不是其内部结构或运作。测试者不需具备应用程序的代码、内部结构和编程语言的专门知识。测试者只需知道什么是系统应该做的事，即当键入一个特定的输入，可得到一定的输出。测试案例是依应用系统应该做的功能，照规范、规格或要求等设计。测试者选择 有效输入和无效输入来验证是否正确的输出。此测试方法可适合大部分的软件测试，例如集成测试（integration testing）以及系统测试（system testing）。</div>
    <div class="text">白盒测试（white-box testing，又称透明盒测试 glass box testing、结构测试 structural testing 等）是一个测试软件的方法，测试应用程序的内部结构或运作，而不是测试应用程序的功能（即黑盒测试）。在白盒测试时，以编程语言的角度来设计测试案例。测试者输入资料验证资料流在程序中的流动路径，并确定适当的输出，类似测试电路中的节点。
      <br/>
      白盒测试可以应用于单元测试（unit testing）、集成测试（integration testing）和系统的软件测试流程，可测试在集成过程中每一单元之间的路径，或者主系统跟子系统中的测试。尽管这种测试的方法可以发现许多的错误或问题，但它可能无法检测未使用部分的规范。</div>
    <div class="text">综上所述，黑盒测试针对外部，是已知产品的功能设计规格来检测是否都能 符合要求;白盒测试重内部逻辑， 按照程序内部的结构测试程序。</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
