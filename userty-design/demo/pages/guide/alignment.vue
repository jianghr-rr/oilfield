<template>
  <div :style="{'--color': themmeColor}">
    <div class="toc-affix">
      <a-anchor>
        <a-anchor-link href="#a" title="对齐方式" />
        <a-anchor-link href="#b" title="文本类对齐" />
        <a-anchor-link href="#c" title="表单类对齐" />
        <a-anchor-link href="#d" title="数字类对齐" />
      </a-anchor>
    </div>

    <div id="a" class="h1-title">对齐方式</div>
    <div class="text">界面中每一元素都应与界面中的某个内容存在某种联系，将不同元素进行排列对齐，符合用户的认知特性，进行视觉引导从而提升用户阅读体验。</div>

    <div id="b" class="h2-title">文本类对齐</div>
    <div class="text">在页面内容设计时需要确定一个统一的视觉起点，来规范排列较短、较散的字段或段落。</div>
    <div class="img-wrap">
      <div>
        <img class="img" :src="img3" />
        <div class="img-title">建议示例</div>
      </div>
      <div>
        <img class="img" :src="img4" />
        <div class="img-title">非建议示例</div>
      </div>
    </div>
    <div id="c" class="h2-title">表单类对齐</div>
    <div class="text">冒号对齐（右对齐），输入框内容以左对齐为主，能让用户将内容锁定在一定范围内，就能找到所有填写项，从而提高填写效率。</div>
    <div class="img-wrap">
      <div>
        <img class="img" :src="img5" />
        <div class="img-title">表单示例</div>
      </div>
    </div>
    <div id="d" class="h2-title">数字类对齐</div>
    <div class="text">为了快速简便的运用数值，直观的对比数值大小，采用所有数值取相同有效位数的，并且右对齐的方式可以跟快速。</div>
    <div class="img-wrap">
      <div>
        <img class="img" :src="img6" />
        <div class="img-title">数字类示例</div>
      </div>
    </div>
  </div>
</template>
<script>
import img3 from '../../assets/guide/3.png';
import img4 from '../../assets/guide/4.png';
import img5 from '../../assets/guide/5.png';
import img6 from '../../assets/guide/6.png';
export default {
  data() {
    return {
      themmeColor: this.$store.getters.color,
      img3,
      img4,
      img5,
      img6,
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
