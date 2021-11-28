<template>
  <div :style="{'--color': themmeColor}">
    <div class="toc-affix">
      <a-anchor>
        <a-anchor-link href="#a" title="简单易用" />
        <a-anchor-link href="#b" title="帕金森定理" />
        <a-anchor-link href="#c" title="美即好用效应" />
      </a-anchor>
    </div>

    <div id="a" class="h1-title">简单易用</div>
    <div class="text">好的用户体验是为用户提供不需要说明书，一看就会，两秒等待时间，三步以内的操作，即被称为简单法则（这里包含三次点击法则，仅建议非铁则）。实现简化的方法，就是需求提出时经过一系列的推敲及取舍，先加法后减法的方式进行深思熟虑的分解。功能确定后，良好的组织结构能够将系统化繁为简。减去明显的繁琐，从而增加有意义的简单，从单功能模块出发。交互设计中做好入口和出口的设计，能进能出，有进有出，从哪里来到哪里去。</div>
    <div id="b" class="h2-title">帕金森定理</div>
    <div class="text">英国作家西里尔·诺斯古德·帕金森提出的俗语：在工作能够完成的时限内，工作量会一直增加，直到所有可用时间都被填充为止。在交互设计中，被解释为分解任务步骤，让用户每一步都 耗费少时间、少精力去完成。帕金森定理在交互设计中，被解释为：一个任务如果需要处理的时间非常长，步骤非常多，那么需要拆解步骤，将任务分成多个小段，分别短时间完成，这样更容易被用户接受。</div>
    <div class="img-wrap">
      <div>
        <img class="img" :src="img1" />
        <div class="img-title">非分步（左）—— 分步（右）</div>
      </div>
    </div>
    <div id="c" class="h2-title">美即好用效应</div>
    <div class="text">在交互设计中，通常被解释为：如果界面设计的足够精美，那么用户可以容忍一些瑕疵和错误。此效应应用范围很窄，最好不要轻易使用，尤其 B 端项目更侧重功能。</div>

  </div>
</template>
<script>
import img1 from '../../assets/guide-2/5.png';
export default {
  data() {
    return {
      themmeColor: this.$store.getters.color,
      img1,
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
