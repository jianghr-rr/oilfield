<template>
  <div :style="{'--color': themmeColor}">
    <div class="toc-affix">
      <a-anchor>
        <a-anchor-link href="#a" title="序列效应" />
        <a-anchor-link href="#b" title="首因效应、近因效应" />
        <a-anchor-link href="#c" title="古腾堡图表" />
      </a-anchor>
    </div>

    <div id="a" class="h1-title">序列效应</div>
    <div class="text">序列效应，也叫作系列位置效应（serial-position effect），是一种心理学现象，指人们倾向于对首先见到的事物和最后见到的事物有更好的印象。让用户愉快的进入，让用户愉快的离开，过程有瑕疵也会被掩埋。分为首因效应（primacy effect）和近因效应（recency effect）。交互设计中，在列举项目时，排在最前面与最后面的元素，要比排在中间的更容易让人记住。</div>
    <div id="b" class="h2-title">首因效应、近因效应</div>
    <div class="text">首因效应是对“第一印象”或“先入为主”所产生的心理学现象，指在行为过程中，最先接触的事物会给人留下深 刻的感知或认知，影响人对事物的感知和判断。这里我们可以把“美即好用效应”连系起来思考。近因效应指在行为过程中，对事物的最近一次接触给人留下深刻的感知或认知，能对首因效应所形成的心理作用起到巩固、维持、否定、修改或调整等作用。</div>
    <div class="img-wrap">
      <div>
        <img class="img" :src="img1" />
        <div class="img-title">首因效应（左）、近因效应（右）</div>
      </div>
    </div>
    <div id="c" class="h2-title">古腾堡图表</div>
    <div class="text">古腾堡图表法是一种阅读重力，用户在阅读内容的时候会使用看似“Z”字形的形态，因此也被叫作 Z 形模式(Z pattern)。内容可视区分为四个部分， 因此在阅读的时候会采用“Z”字形，针对于某一区域内容;而尼尔森·雅各布提出过的“F pattern”则更针对于网页设计。此方法对于交互设计应用较浅， 范围局限太大。当四个对角线均 有元素的情况下，“中区偏见” 则会更明显，即视觉优先看中心。</div>
    <div class="img-wrap">
      <div>
        <img class="img" :src="img2" />
        <div class="img-title">Z 形模式</div>
      </div>
      <div>
        <img class="img" :src="img3" />
        <div class="img-title">F 形模式</div>
      </div>
    </div>
  </div>
</template>
<script>
import img1 from '../../assets/guide-2/6.png';
import img2 from '../../assets/guide-2/7.png';
import img3 from '../../assets/guide-2/8.png';
export default {
  data() {
    return {
      themmeColor: this.$store.getters.color,
      img1,
      img2,
      img3,
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
