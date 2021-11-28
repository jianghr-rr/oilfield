<template>
  <div :style="{'--color': themmeColor}">
    <div class="toc-affix">
      <a-anchor>
        <a-anchor-link href="#a" title="间距关系" />
        <a-anchor-link href="#b" title="横向间距关系" />
        <a-anchor-link href="#c" title="纵向间距关系" />
      </a-anchor>
    </div>

    <div id="a" class="h1-title">间距关系</div>
    <div class="text">无论是布局中的模块与模块、元素与模块、还是元素与元素之间的间距通过一定的原则规范，对不同关联的内容区域，设置不同间距。间距越小，关联性越高，不同间距的控制，可以有效的在视觉上划分区域，达到用户快速分区分类的效果，让用户对页面结构和信息层次一目了然。</div>
    <div id="b" class="h2-title">横向间距关系</div>
    <div class="text">为适应不同尺寸屏幕，排列采用栅格布局来排列所选组件，从而保证布局的灵活性与可用性。</div>
    <div class="img-wrap">
      <div>
        <img class="img" :src="s1" />
        <div class="img-title">横向间距关系示例</div>
      </div>
    </div>
    <div id="c" class="h2-title">纵向间距关系</div>
    <div class="text">通过不同间距来划分信息层次结构，不适用的情况下可通过增加元素区分层次。</div>
    <div class="img-wrap">
      <div>
        <img class="img" :src="s2" />
        <div class="img-title">纵向间距关系示例</div>
      </div>
    </div>
  </div>
</template>
<script>
import s1 from '../../assets/guide-2/1.png';
import s2 from '../../assets/guide-2/2.png';
export default {
  data() {
    return {
      themmeColor: this.$store.getters.color,
      s1,
      s2,
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
