<template>
  <div :style="{'--color': themmeColor}">
    <div class="toc-affix">
      <a-anchor>
        <a-anchor-link href="#a" title="信息提示" />
      </a-anchor>
    </div>

    <div id="a" class="h1-title">信息提示</div>
    <div class="text">在整个操作流程中，用户基于信息（如：信息分区、信息分区）提示作出判断并操作，操作是主观的判断，当某一个操作任务完成后界面需要给予用户操作反馈（如：提示框、信息标注），使用户能主观感受到操作信息达到首要控制的体验效果。</div>
    <div class="img-wrap">
      <div>
        <img class="img" :src="img7" />
        <div class="img-title">信息分区</div>
      </div>
      <div>
        <img class="img" :src="img8" />
        <div class="img-title">信息分区</div>
      </div>
      <br/>
      <div>
        <img class="img" :src="img9" />
        <div class="img-title">提示框</div>
      </div>
      <div>
        <img class="img" :src="img10" />
        <div class="img-title">信息标注</div>
      </div>
    </div>
  </div>
</template>
<script>
import img7 from '../../assets/guide/7.png';
import img8 from '../../assets/guide/8.png';
import img9 from '../../assets/guide/9.png';
import img10 from '../../assets/guide/10.png';
export default {
  data() {
    return {
      themmeColor: this.$store.getters.color,
      img7,
      img8,
      img9,
      img10,
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
