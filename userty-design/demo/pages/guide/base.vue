<template>
  <div :style="{'--color': themmeColor}">
    <div class="toc-affix">
      <a-anchor>
        <a-anchor-link href="#a" title="基础原则" />
        <a-anchor-link href="#b" title="统一" />
        <a-anchor-link href="#c" title="高效" />
        <a-anchor-link href="#d" title="反馈" />
      </a-anchor>
    </div>

    <div id="a" class="h1-title">基础原则</div>
    <div class="text">XinJiang Userty Design是为新疆油田相关系统产品的界面设计、用户体验问题给予的设计方案，对油田体系基础组件</div>
    <div id="b" class="h2-title">统一</div>
    <div class="text">以统一的布局、图标、设计样式规范等为相关系统提供基础框架。设计规范在一个页面、产品、甚至企业，起着整体形象的建设作用，特有的规范为企业提供统一的品牌效果，统一的视觉认知。</div>
    <div class="text">每一个界面的元素保持一致，无论是风格还是操作习惯。如果是圆角，都要保证圆角；如果右上角是返回，那么其他界面右上角都是返回；如果界面操作功能图标在下方，那么其他界面都是下方。</div>
    <div id="c" class="h2-title">高效</div>
    <div class="text">通过相对统一的界面样式，为用户提供一致的认知暗示，使用户在一定操作时间内达到首要控制。统一的规范的界面设计可以帮助用户减少冗余思考，快速定位需求、识别、下一步反应。</div>
    <div class="text">能两步解决问题，绝不使用三步；能一步解决问题，绝不使用两步。让操作的行为更佳迅速、便捷，充分考虑到用户下一步想要做什么，便提供这样的便捷。例如搜索内容，在没有输入完毕、没有点击按钮的时候， 就已经出现了关联搜索并可以方便点击。</div>
    <div class="text">进行一些复杂操作时，需要给予用户选择权，他可以有两项甚至三项进行行为选择。例如， 当我们退出某些内容时，我们可以有确定(再次提醒)、取消(无意按到)、保存(提供保护)。</div>
    <div id="d" class="h2-title">反馈</div>
    <div class="text">用户决策后的操作完成，是否能得到一致并直观的操作反馈是决定用户体验是否良好甚至极佳的关键。给予用户操作建议或安全提示，通过界面样式和交互动效让用户可以清晰的感知自己的操作，页面元素的变化清晰地展现当前状态。</div>
    <div class="text">一组动作包括开始、过程、结果，而在完成结果后，用户需要得到提示进行完成、关闭。 例如电商购买产品，完成一系列动作后需要有一个界面反馈购买成功，让用户完整的知道自己可以结束当前动作了。</div>
    <div class="text">可以减少用户的焦虑感，当进行了错误的操作，知道还可以恢复。同时，当误入了一个界面还可以随时返回操作，提供返回出口非常重要。</div>
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
