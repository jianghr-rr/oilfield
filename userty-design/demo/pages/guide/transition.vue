<template>
  <div :style="{'--color': themmeColor}">
    <div class="toc-affix">
      <a-anchor>
        <a-anchor-link href="#a" title="过渡效果" />
        <a-anchor-link href="#c" title="过渡反馈" />
        <a-anchor-link href="#d" title="及时反馈" />
      </a-anchor>
    </div>

    <div id="a" class="h1-title">过渡效果</div>
    <div class="text">用户决策后的操作完成，是否能得到一致并直观的操作反馈是决定用户体验是否良好甚至极佳的关键。合理的过渡效果给予用户操作建议或安全提示，通过界面样式和交互动效让用户可以清晰的感知自己的操作，页面元素的变化清晰地展现当前状态。</div>

    <div id="b" class="h2-title">过渡反馈</div>
    <div class="text">用户对系统操作，系统作出响应是控制感的基本体现之一。例如在对数据进行操作的过程中，由于数据增加，删除，导致内容重新排序。由于内容相似性过高，瞬间响应未打破用户的感知阀限，导致用户无法识别操作后内容的变化。此时过渡效果在用户体验中就显得尤为重要。</div>
    <div class="img-wrap">
      <div>
        <img class="img" :src="img11" />
        <div class="img-title">过渡示例</div>
      </div>
    </div>


    <div id="c" class="h2-title">及时反馈</div>
    <div class="text">当一个操作需要一定时间完成时，就需要即时告知进度，保持与用户的沟通。在必要的时候提供必要的提示，而不是一次性显示所有提示，导致界面混乱，增加认知负担。</div>
    <div class="img-wrap">
      <div>
        <img class="img" :src="img2" />
        <div class="img-title">正在加载提示</div>
      </div>
      <div>
        <img class="img" :src="img1" />
        <div class="img-title">刷新提示</div>
      </div>
    </div>
  </div>
</template>
<script>
import img1 from '../../assets/guide-2/3.png';
import img2 from '../../assets/guide-2/4.png';
import img11 from '../../assets/guide/11.png';

export default {
  data() {
    return {
      themmeColor: this.$store.getters.color,
      img1,
      img2,
      img11,
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
  .img-wrap-d();
}
</style>
